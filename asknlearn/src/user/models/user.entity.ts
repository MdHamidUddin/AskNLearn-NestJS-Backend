import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')

export class UsersEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: ''})
    name: string;

    @Column()
    age: number;

    @Column({default: ''})
    education: string;

    @Column({type: 'timestamp', default:()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;

}