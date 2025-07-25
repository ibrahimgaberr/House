export interface FormValues {
    fullName: string,
    phone:  string,
    option:string,
    message: string
}

export interface SendMessageValues {
    fullName: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
}

export interface NewsSendMessage {
    fullName: string,
    phone: string,
    message: string,
}