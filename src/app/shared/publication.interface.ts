export interface PublicationInterface {
    id: string;
    title?: string;
    materials?:string;
    description: string;
    image?: string[];
    file?: string;
    fileName?: string;
    video?: string;
    date: Date;
    userId: string;
    category?: string;
    userName?: string;
    userPhoto?: string;
    idSaved?: string;
    idUserSave?: string;
    idReport?: string;
    idUserReported?: string;
    commentReport?: string;
    reasonReport?: string;
    state?: string;
    videoURL?:any;
}
