import { ObjectType, Field, Int} from '@nestjs/graphql'

@ObjectType()
export class Book {
    @Field((type) => Int)
    id: number;

    // by default GraphQL accepts Field type as string
    @Field()
    title: string;

    @Field((type) => Int)
    price: number;
}