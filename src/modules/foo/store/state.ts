import { IFoo } from '../models/foo';

export interface IFooState {
    isLoading: boolean,
    foos: IFoo[]
}

export default () => ({

    isLoading: true,
    foos: []

})  