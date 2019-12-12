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
		sh 'docker image build --build-arg ENVIRON1="51.143.140.68" -t="51.140.99.70:5000/sfiafrontend:testing" .'
                sh 'docker push 51.140.99.70:5000/sfiafrontend:testing' 
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
		sh 'docker image build --build-arg ENVIRON1="51.143.140.68" -t="51.140.99.70:5000/sfiafrontend:staging" .'
                sh 'docker push 51.140.99.70:5000/sfiafrontend:staging' 
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
                sh 'docker image build --build-arg ENVIRON1="51.143.140.68" -t="51.140.99.70:5000/sfiafrontend:production" .'
                sh 'docker push 51.140.99.70:5000/sfiafrontend:production' 
		sh '/home/manager/terraform-azure/frontEndUpdate.sh'
            }
        }
}
}
