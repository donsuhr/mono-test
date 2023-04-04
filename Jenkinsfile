pipeline {
    agent any 
    stages {
        stage('Stage 1') {
            steps {
                echo 'Hello world!' 
            }
        }
        stage('Stage 2') {
          steps {
            echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
          }
        }
    }
}
