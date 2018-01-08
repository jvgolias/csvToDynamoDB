System.register(["inquirer"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    function CSVToDynamoDBScript() {
        const csvTeste = new CSVTeste();
        csvTeste.mainFunction();
    }
    function getAWSCredentials(callback) {
        var questions = [
            {
                name: 'awsKey',
                type: 'input',
                message: '[AWS Credentials] Enter your AWS Key: ',
                prefix: '',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Please enter your AWS Key';
                    }
                }
            },
            {
                name: 'secretKey',
                type: 'password',
                message: '[AWS Credentials] Enter your Secret Key: ',
                prefix: '',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    }
                    else {
                        return 'Please enter your Secret Key';
                    }
                }
            }
        ];
        Inquirer.prompt(questions).then(callback);
    }
    var Inquirer, CSVTeste;
    return {
        setters: [
            function (Inquirer_1) {
                Inquirer = Inquirer_1;
            }
        ],
        execute: function () {
            /*const userInput = window.prompt("User Name: ")
            console.log(userInput)
            */
            CSVToDynamoDBScript();
            CSVTeste = class CSVTeste {
                constructor() {
                }
                getAWSCredentials(callback) {
                    return __awaiter(this, void 0, void 0, function* () {
                        var questions = [
                            {
                                name: 'awsKey',
                                type: 'input',
                                message: '[AWS Credentials] Enter your AWS Key: ',
                                prefix: '',
                                validate: function (value) {
                                    if (value.length) {
                                        return true;
                                    }
                                    else {
                                        return 'Please enter your AWS Key';
                                    }
                                }
                            },
                            {
                                name: 'secretKey',
                                type: 'password',
                                message: '[AWS Credentials] Enter your Secret Key: ',
                                prefix: '',
                                validate: function (value) {
                                    if (value.length) {
                                        return true;
                                    }
                                    else {
                                        return 'Please enter your Secret Key';
                                    }
                                }
                            }
                        ];
                        Inquirer.prompt(questions).then(callback);
                    });
                }
                mainFunction() {
                    return __awaiter(this, void 0, void 0, function* () {
                        const teste = {
                            awsKey: "teste",
                            secretKey: "teste2"
                        };
                        this.awsCredentials = teste;
                        console.log(this.awsCredentials);
                        yield this.getAWSCredentials(a => this.awsCredentials = a);
                        console.log(this.awsCredentials);
                    });
                }
            };
            exports_1("CSVTeste", CSVTeste);
        }
    };
});
