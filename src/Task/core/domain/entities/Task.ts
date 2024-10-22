
export class Task {
    private id: string;
    private title: string;
    private desc: string;
    private status: string;

    constructor(
        id: string,
        title: string,
        desc: string,
        status: string
    ) {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.status = status;
    }

    public getId(): string {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getDesc(): string {
        return this.desc;
    }

    public getStatus(): string {
        return this.status;
    }
}