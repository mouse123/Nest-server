import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column({
        default: 0
    })
    level: number;

    @Column({
        default: "0000-00-00 00:00:00"
    })
    login_time: Date;
    

    @Column()
    area: string;
}