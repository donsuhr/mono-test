pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!' 
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
            setBuildStatus("Build succeeded", "SUCCESS");
        }

        failure {
            echo 'should set build status fail'
            setBuildStatus("Build failed", "FAILURE");
        }
    }
}

void setBuildStatus(String message, String state) {
    step([
        $class: "GitHubCommitStatusSetter",
        reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/donsuhr/mono-test"],
        contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
        errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
        statusResultSource: [$class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]]]
    ]);
}

