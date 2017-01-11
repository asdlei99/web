import {Injectable} from '@angular/core';
import {SoundcloudCollection} from '../../main/collections/soundcloud.collection';
import {User} from '../models/user.model';

@Injectable()
export class Users<TModel extends User> extends SoundcloudCollection<TModel> {
    endpoint = '/users';
    model: any = User;
}
