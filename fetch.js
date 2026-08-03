fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const normalizeValue = value => (typeof value === "string" ? value.trim() : "");
const isValidHandle = value => {
  const normalizedValue = normalizeValue(value);

  return normalizedValue !== "" && !/\s/.test(normalizedValue) && !/^YOUR\b/i.test(normalizedValue);
};

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};
if (USE_GITHUB_DATA === "true") {
  const normalizedGitHubUsername = normalizeValue(GITHUB_USERNAME);

  if (!normalizedGitHubUsername || !normalizeValue(GITHUB_TOKEN)) {
    console.log("Skipping GitHub profile fetch. Set REACT_APP_GITHUB_TOKEN and GITHUB_USERNAME in .env to enable it.");
  } else if (!isValidHandle(normalizedGitHubUsername)) {
    console.log("Skipping GitHub profile fetch because GITHUB_USERNAME is not a valid GitHub login.");
  } else {
    console.log(`Fetching profile data for ${normalizedGitHubUsername}`);
    var data = JSON.stringify({
      query: `
{
  user(login:"${normalizedGitHubUsername}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });
    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(default_options, res => {
      let data = "";

      console.log(`statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        throw new Error(ERR.requestFailed);
      }

      res.on("data", d => {
        data += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/profile.json", data, function (err) {
          if (err) return console.log(err);
          console.log("saved file to public/profile.json");
        });
      });
    });

    req.on("error", error => {
      throw error;
    });

    req.write(data);
    req.end();
  }
}

const normalizedMediumUsername = normalizeValue(MEDIUM_USERNAME);

if (isValidHandle(normalizedMediumUsername)) {
  console.log(`Fetching Medium blogs data for ${normalizedMediumUsername}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=${encodeURIComponent(`https://medium.com/feed/@${normalizedMediumUsername}`)}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      throw new Error(ERR.requestFailedMedium);
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    throw error;
  });

  req.end();
} else if (normalizedMediumUsername) {
  console.log("Skipping Medium blog fetch because MEDIUM_USERNAME is not a valid Medium handle.");
}
