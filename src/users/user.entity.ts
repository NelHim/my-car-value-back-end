import { AfterInsert, AfterRemove, AfterUpdate, PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted a user with id, ', this.id)
  }
  @AfterUpdate()
  logUpdate() {
    console.log('Updated a user with id, ', this.id)
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed a user with id, ', this.id)
  }

}
