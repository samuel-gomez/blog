const queryString = require("query-string")
const fetch = require("node-fetch")

const processRepo = (createNodeId, createContentDigest) => repo => {
  const nodeId = createNodeId(`-${repo.id}`)
  const nodeContent = JSON.stringify(repo)
  const nodeData = Object.assign({}, repo, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `GithubRepo`,
      content: nodeContent,
      contentDigest: createContentDigest(repo),
    },
  })
  return nodeData
}

const apiRepos = secretApp =>
  `https://api.github.com/users/axaguildev/repos?${secretApp}`

const apiByType = secretApp => repo => type =>
  `https://api.github.com/repos/AxaGuilDEv/${repo}/${type}?${secretApp}`

const fetchJson = (apiUrl, errorMessage = "fetch failed") =>
  fetch(apiUrl, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  })
    .then(res => res.json())
    .catch(() => console.log(errorMessage))

const getRepos = secretApp => fetchJson(apiRepos(secretApp))

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  delete configOptions.plugins
  const apiOptions = queryString.stringify(configOptions)
  try {
    const repos = await getRepos(apiOptions)
    repos.forEach(repo => {
      const nodeData = processRepo(createNodeId, createContentDigest)(repo)
      createNode(nodeData)
    })
  } catch (error) {
    console.log(error)
  }
}
