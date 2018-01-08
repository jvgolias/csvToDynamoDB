import { AWSCredentials } from './csvToDynamodb';
/*CSV to DynamoDB*/
import * as AWS from 'aws-sdk'
import * as CsvArray from 'csv-array'
import * as Inquirer from 'inquirer'

class CSVToDynamodb{
    public awsCredentials : AWSCredentials
    public tableName: string
    public arrayWithCSVInfo
    public file


    async getUserAndFileInfo(callback):Promise<void>{
        var questions = [
            {
              name: 'awsKey',
              type: 'input',
              message: '[AWS Credentials] Enter your AWS Key: ',
              prefix:'',
              validate: function( value ) {
                if (value.length) {
                  return true;
                } else {
                  return 'Please enter your AWS Key';
                }
              }
            },
            {
              name: 'secretKey',
              type: 'password',
              message: '[AWS Credentials] Enter your Secret Key: ',
              prefix:'',
              validate: function(value) {
                if (value.length) {
                  return true;
                } else {
                  return 'Please enter your Secret Key';
                }
              }
            },
            {
                name: 'region',
                type: 'input',
                message: '[AWS Credentials] Enter your region: ',
                prefix: '',
                default: 'us-east-1',
                validate: function(value) {
                    if (value.length) {
                      return true;
                    } else {
                      return 'Please enter your Secret Key';
                    }
                  }
            },
            {
                name:'tableName',
                type:   'input',
                message: '[DynamoDB Info] Enter the table\'s name you wish to put item in: ',
                prefix: '',
                validate: function(value) {
                    if (value.length) {
                      return true;
                    } else {
                      return 'Please enter the table\'s name';
                    }
                  }
            }
          ];
          Inquirer.prompt(questions).then(callback);
          return Promise.resolve()
    }

    async mainFunction(): Promise<void>{
        await this.getUserAndFileInfo(result => this.saveUserAndFileInfo(result))
    
        return Promise.resolve()
    }

    async saveUserAndFileInfo(result): Promise<void>{
        this.awsCredentials = {
            awsKey: result.awsKey,
            secretKey: result.secretKey,
            region: result.region
        }
        this.tableName = result.tableName
        console.log(this.awsCredentials)
        console.log(this.tableName)
        await CsvArray.parseCSV("Relacao_de_atividades_MEI.csv", data => this.uploadCsvInfoToDynamodb(data))
        return Promise.resolve()
    }

    async uploadCsvInfoToDynamodb(data): Promise<void>{

    }

    
}



export interface AWSCredentials{
    awsKey: string,
    secretKey: string,
    region: string
}


  const csvToDynamodb = new CSVToDynamodb()
  csvToDynamodb.mainFunction()
  

