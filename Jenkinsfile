pipeline {
    agent any
    stages {
        stage('Stage 1') {
            steps {
               updateGithubCommitStatus(currentBuild, "PENDING",  "Running Functional Tests")
                echo 'Hello world! 4' 
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
          agent {
            docker { 
              image 'node:16.13.1-alpine'
              reuseNode true
            }
          }
          steps {
            sh 'node --version'
            echo ' achange '
          }
        }

        stage('Foo') {
          agent {
            docker { 
              image 'node:16.13.1-alpine'
              reuseNode true
            }
          }
          steps {
            echo 'foo'
            sh 'node --version'
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
            updateGithubCommitStatus(currentBuild, "FAILURE", "Build failed")
        }
    }
}

def getRepoURL() {
  sh "git config --get remote.origin.url > .git/remote-url"
  return readFile(".git/remote-url").trim()
}

def getCommitSha() {
  // change
  sh "git rev-parse HEAD > .git/current-commit"
  return readFile(".git/current-commit").trim()
}

def updateGithubCommitStatus(build, state = 'SUCCESS', message = 'Build completed successfully' ) {
  repoUrl = getRepoURL()
  commitSha = getCommitSha()

  sh "echo repoUrl: ${repoUrl}"
  sh "echo commitSha: ${commitSha}"

  step([
    $class: 'GitHubCommitStatusSetter',
    reposSource: [$class: "ManuallyEnteredRepositorySource", url: repoUrl],
    commitShaSource: [$class: "ManuallyEnteredShaSource", sha: commitSha],
    contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
    errorHandlers: [[$class: 'ShallowAnyErrorHandler']],
    statusResultSource: [
      $class: 'ConditionalStatusResultSource',
      results: [
        [$class: 'AnyBuildResult', state: state, message: message]
      ]
    ]
  ])
}

