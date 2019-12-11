pipeline {
    agent any

    stages {
        stage('Testing Environment') {
	  when {
		expression {
			env.BRANCH_NAME=='developer'
		}
	}
            steps {
            echo "Testing"
		sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="sebs2112/sfia-frontend:testing" .'
                sh 'docker push sebs2112/sfia-frontend:testing' 
                }
            }


        stage('Staging') {
	  when {
		expression {
			env.BRANCH_NAME=='staging'
		}
	}
            steps {
		sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="sebs2112/sfia-frontend:staging" .'
                sh 'docker push sebs2112/sfia-frontend:staging' 
                 echo "staging"
                } 
            }


      stage('Production') {
	when {
		expression {
			env.BRANCH_NAME=='master'
		}
	}
            steps {
		echo "production"
               sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="sebs2112/sfia-frontend:production" .'
                sh 'docker push sebs2112/sfia-frontend:production' 
            }
        }
}
}
