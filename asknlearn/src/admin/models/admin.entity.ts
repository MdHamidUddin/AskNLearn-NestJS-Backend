import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admin')

export class AdminsEntity{
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default: ''})
    username: string;

    @Column({default: ''})
    password: string;

}