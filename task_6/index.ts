enum StatusName {
    SUCCESS = "success",
    FAILED = "failed"
}

interface IRequest {
    sum: number
    from: number
    to: number
}

interface IDataSuccess extends IRequest {
    databaseId: number
}

interface IDataFailed {
    errorMessage: string
    errorCode: number
}

interface IResponse {
    status: StatusName
    data: IDataSuccess | IDataFailed
}

const obj1: IResponse = {
    status: StatusName.SUCCESS,
    data: {
        errorCode: 2,
        errorMessage: "!23",
    }
}

const obj2: IResponse = {
    status: StatusName.SUCCESS,
    data: {
        databaseId: 3,
        sum: 1,
        from: 4,
        to: 14
    }
}