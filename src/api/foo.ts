import { IFoo, IFooFormValues } from '@/modules/foo/models/foo';
import { requestMap } from './index';

export const fooApi = {
    post: ( foo: IFooFormValues ): Promise<IFoo> => requestMap.post('/foos/', foo),
    get: (fooId: number): Promise<IFoo> => requestMap.get(`/foos/${fooId}`),
    getAll: (): Promise<IFoo[]> => requestMap.get('/foos/'),
    put: (fooId: number, foo: IFooFormValues ):Promise<IFoo> => requestMap.put(`/foos/${fooId}`, foo),
    delete: (fooId: number ):Promise<IFoo> => requestMap.delete(`/foos/${fooId}`)
}
