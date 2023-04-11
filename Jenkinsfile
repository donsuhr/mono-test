pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!' 
                sh 'git --version'
            }
        }
        stage('Stage 2') {
          steps {
            echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
            echo "Branch: ${env.BRANCH_NAME} ${env.BRANCH_URL}"
          }
        }

        stage('Test') {
            steps {
                sh 'node --version'
                echo ' achange '
            }
        }
    }
    post{
        success{
            echo 'should set build status succesws'
            updateGithubCommitStatus(currentBuild)
        }

        failure {
            echo 'should set build status fail'
            updateGithubCommitStatus(currentBuild)
        }
    }
}

def getRepoURL() {
  sh "git config --get remote.origin.url > .git/remote-url"
  return readFile(".git/remote-url").trim()
}

def getCommitSha() {
  sh "git rev-parse HEAD > .git/current-commit"
  return readFile(".git/current-commit").trim()
}

def updateGithubCommitStatus(build) {
  // workaround https://issues.jenkins-ci.org/browse/JENKINS-38674
  repoUrl = getRepoURL()
  commitSha = getCommitSha()

  sh "echo repoUrl: ${repoUrl}"
  sh "echo commitSha: ${commitSha}"

  step([
    $class: 'GitHubCommitStatusSetter',
    reposSource: [$class: "ManuallyEnteredRepositorySource", url: repoUrl],
    commitShaSource: [$class: "ManuallyEnteredShaSource", sha: commitSha],
    errorHandlers: [[$class: 'ShallowAnyErrorHandler']],
    statusResultSource: [
      $class: 'ConditionalStatusResultSource',
      results: [
        [$class: 'BetterThanOrEqualBuildResult', result: 'SUCCESS', state: 'SUCCESS', message: build.description],
        [$class: 'BetterThanOrEqualBuildResult', result: 'FAILURE', state: 'FAILURE', message: build.description],
        [$class: 'AnyBuildResult', state: 'FAILURE', message: 'Loophole']
      ]
    ]
  ])
}

void updateGitHubCommitStatus(String state, String description) {
  // NB: There are two different types of variables here, environment variables and groovy variables
  //  - env vars (GITHUB_CREDENTIALS, BUILD_URL, etc) are escaped to allow the shell to fill them in
  //  - groovy vars (state, description) are filled in by the pipeline (before shell executes)
  sh("""
    export GIT_COMMIT=`git rev-parse HEAD`
    curl --silent --show-error https://git.uscis.dhs.gov/api/v3/repos/\${GITHUB_REPO_NAME}/statuses/\${GIT_COMMIT} \
      --header "Authorization: token \${GITHUB_CREDENTIALS}" \
      --header "Content-Type: application/json" \
      --data '{"target_url": "'\${BUILD_URL}'", "context": "jenkins-ci", \
               "state": "${state}", "description": "${description}"}'
  """)
}
