import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Home } from './../index'
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { fetchData, userRepos } from '../../../ApiComp/ApiComp'

jest.mock('axios');

afterEach(() => {
    cleanup()
})

test('Should render Home Component', async () => {
    render(<Home />)
    const homeElement = screen.getByTestId('home-1')
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent("GitHub Explorer")
    expect(homeElement).toHaveTextContent("Username")

    const inputElement = screen.getByTestId('input-1')
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'gaurangPhpdots' } })

    expect(inputElement.value).toBe('gaurangPhpdots')

    const btnElement = screen.getByTestId('btn-1')
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toContainHTML("<button data-testid='btn-1' type='button'>Search</button>")
    expect(btnElement).toHaveTextContent("Search")

})

test('Searching User and Repositories', async () => {
    const data = {
        "login": "gaurangPhpdots",
        "id": 96583314,
        "node_id": "U_kgDOBcG-kg",
        "avatar_url": "https://avatars.githubusercontent.com/u/96583314?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gaurangPhpdots",
        "html_url": "https://github.com/gaurangPhpdots",
        "followers_url": "https://api.github.com/users/gaurangPhpdots/followers",
        "following_url": "https://api.github.com/users/gaurangPhpdots/following{/other_user}",
        "gists_url": "https://api.github.com/users/gaurangPhpdots/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gaurangPhpdots/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gaurangPhpdots/subscriptions",
        "organizations_url": "https://api.github.com/users/gaurangPhpdots/orgs",
        "repos_url": "https://api.github.com/users/gaurangPhpdots/repos",
        "events_url": "https://api.github.com/users/gaurangPhpdots/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gaurangPhpdots/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Gaurang",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 1,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2021-12-23T14:15:33Z",
        "updated_at": "2022-08-10T11:08:18Z"
    };


    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData('gaurangPhpdots')).resolves.toEqual(data);

    const repoData = [
        {
            "id": 523325226,
            "node_id": "R_kgDOHzFPKg",
            "name": "git_search",
            "full_name": "gaurangPhpdots/git_search",
            "private": false,
            "owner": {
                "login": "gaurangPhpdots",
                "id": 96583314,
                "node_id": "U_kgDOBcG-kg",
                "avatar_url": "https://avatars.githubusercontent.com/u/96583314?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/gaurangPhpdots",
                "html_url": "https://github.com/gaurangPhpdots",
                "followers_url": "https://api.github.com/users/gaurangPhpdots/followers",
                "following_url": "https://api.github.com/users/gaurangPhpdots/following{/other_user}",
                "gists_url": "https://api.github.com/users/gaurangPhpdots/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/gaurangPhpdots/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/gaurangPhpdots/subscriptions",
                "organizations_url": "https://api.github.com/users/gaurangPhpdots/orgs",
                "repos_url": "https://api.github.com/users/gaurangPhpdots/repos",
                "events_url": "https://api.github.com/users/gaurangPhpdots/events{/privacy}",
                "received_events_url": "https://api.github.com/users/gaurangPhpdots/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/gaurangPhpdots/git_search",
            "description": "This is a ReactJS project using Typescript that is called \"Git Search\" and you can search for git-hub users and access their information about repositories!",
            "fork": false,
            "url": "https://api.github.com/repos/gaurangPhpdots/git_search",
            "forks_url": "https://api.github.com/repos/gaurangPhpdots/git_search/forks",
            "keys_url": "https://api.github.com/repos/gaurangPhpdots/git_search/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/gaurangPhpdots/git_search/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/gaurangPhpdots/git_search/teams",
            "hooks_url": "https://api.github.com/repos/gaurangPhpdots/git_search/hooks",
            "issue_events_url": "https://api.github.com/repos/gaurangPhpdots/git_search/issues/events{/number}",
            "events_url": "https://api.github.com/repos/gaurangPhpdots/git_search/events",
            "assignees_url": "https://api.github.com/repos/gaurangPhpdots/git_search/assignees{/user}",
            "branches_url": "https://api.github.com/repos/gaurangPhpdots/git_search/branches{/branch}",
            "tags_url": "https://api.github.com/repos/gaurangPhpdots/git_search/tags",
            "blobs_url": "https://api.github.com/repos/gaurangPhpdots/git_search/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/gaurangPhpdots/git_search/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/gaurangPhpdots/git_search/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/gaurangPhpdots/git_search/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/gaurangPhpdots/git_search/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/gaurangPhpdots/git_search/languages",
            "stargazers_url": "https://api.github.com/repos/gaurangPhpdots/git_search/stargazers",
            "contributors_url": "https://api.github.com/repos/gaurangPhpdots/git_search/contributors",
            "subscribers_url": "https://api.github.com/repos/gaurangPhpdots/git_search/subscribers",
            "subscription_url": "https://api.github.com/repos/gaurangPhpdots/git_search/subscription",
            "commits_url": "https://api.github.com/repos/gaurangPhpdots/git_search/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/gaurangPhpdots/git_search/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/gaurangPhpdots/git_search/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/gaurangPhpdots/git_search/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/gaurangPhpdots/git_search/contents/{+path}",
            "compare_url": "https://api.github.com/repos/gaurangPhpdots/git_search/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/gaurangPhpdots/git_search/merges",
            "archive_url": "https://api.github.com/repos/gaurangPhpdots/git_search/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/gaurangPhpdots/git_search/downloads",
            "issues_url": "https://api.github.com/repos/gaurangPhpdots/git_search/issues{/number}",
            "pulls_url": "https://api.github.com/repos/gaurangPhpdots/git_search/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/gaurangPhpdots/git_search/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/gaurangPhpdots/git_search/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/gaurangPhpdots/git_search/labels{/name}",
            "releases_url": "https://api.github.com/repos/gaurangPhpdots/git_search/releases{/id}",
            "deployments_url": "https://api.github.com/repos/gaurangPhpdots/git_search/deployments",
            "created_at": "2022-08-10T11:58:01Z",
            "updated_at": "2022-08-10T12:04:44Z",
            "pushed_at": "2022-08-11T13:08:36Z",
            "git_url": "git://github.com/gaurangPhpdots/git_search.git",
            "ssh_url": "git@github.com:gaurangPhpdots/git_search.git",
            "clone_url": "https://github.com/gaurangPhpdots/git_search.git",
            "svn_url": "https://github.com/gaurangPhpdots/git_search",
            "homepage": "",
            "size": 229,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "TypeScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "allow_forking": true,
            "is_template": false,
            "web_commit_signoff_required": false,
            "topics": [

            ],
            "visibility": "public",
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "main"
        }
    ]

    axios.get.mockImplementationOnce(() => Promise.resolve(repoData));

    await expect(userRepos('gaurangPhpdots')).resolves.toEqual(repoData)

})
