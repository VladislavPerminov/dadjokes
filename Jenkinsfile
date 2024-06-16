pipeline {
    agent {
        label 'agent_node'
    }
     tools {
        terraform 'tf1.6'
    }
    environment {
        PAT_DOCKERHUB = credentials('PAT_Dockerhub')
    }
 
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/VladislavPerminov/dadjokes.git'
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm install
                    npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
        stage('Scan') {
            steps { 
                withSonarQubeEnv(installationName: 'sq1') {
                    sh ''' sonar-scanner \
                        -Dsonar.projectKey=dadjokes \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=http://172.22.0.5:9000 \
                        -Dsonar.token=sqp_9b3e7598384ea592617b184e07797028a65bc6ac 
                        '''
                }
            }
        }
        
        stage('QualiteGate') {
            steps{
                timeout(time:4, unit: 'MINUTES'){
                    waitForQualityGate abortPipeline: true 
                }
            }    
        }
        
        stage('Delivery') {
            steps {
                sh 'docker login -u steppenwol -p ${PAT_DOCKERHUB}'
                sh 'docker build . -t steppenwol/dadjokes:${BUILD_ID}'
                sh 'docker push steppenwol/dadjokes:${BUILD_ID}'
            }
        }
    }
    stage('Terraform Init') {
            steps {
                dir('Terraform') {
                    sh 'terraform init'
                    sh 'terraform plan -out=terraform.tfplan'
                }
            }
        }
        stage('Terraform Apply') {
            steps {
                dir('Terraform') {
                    sh 'terraform apply -auto-approve terraform.tfplan'
                }
            }
        }
        stage('Ansible Deploy') {
            steps {
                dir('Ansible') {
                    sh 'ansible-playbook -i inventory.ini playbooks/main.yml'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                dir('Kubernetes') {
                    sh 'kubectl apply -f deployment.yaml'
                    sh 'kubectl apply -f service.yaml'
                    sh 'kubectl apply -f ingress.yaml'
                }
            }
        }
    }
    post {
        failure{
            mail bcc: '', body: 'pas de chance', cc: '', from: '', replyTo: '', subject: 'Fail', to: 'admin@admin.com'
          }
        success{
            mail bcc: '', body: 'bravo', cc: '', from: '', replyTo: '', subject: 'Sucess', to: 'admin@admin.com'
           }
        }
}