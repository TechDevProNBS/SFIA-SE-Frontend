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
		sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="10.0.5.4/5000:testing" .'
                sh 'docker push 10.0.5.4/5000:testing' 
		sh '/home/manager/terraform-azure/frontEndUpdate.sh'
                }
            }


        stage('Staging') {
	  when {
		expression {
			env.BRANCH_NAME=='staging'
		}
	}
            steps {
		echo "staging"
		sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="10.0.5.4/5000:staging" .'
                sh 'docker push 10.0.5.4/5000:staging' 
		sh '/home/manager/terraform-azure/frontEndUpdate.sh'
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
                sh 'docker image build --build-arg ENVIRON1="location.hostname" -t="10.0.5.4/5000:production" .'
                sh 'docker push 10.0.5.4/5000:production' 
		sh '/home/manager/terraform-azure/frontEndUpdate.sh'
            }
        }
}
}
