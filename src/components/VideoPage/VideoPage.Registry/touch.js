import { Registry } from '@bem-react/di';

import { Header, cnHeader } from '../../Header/Header@touch';
import { Video, cnVideo } from '../../Video/Video@touch';

export const touch = new Registry({ id: 'platform' });

touch.set(cnHeader(), Header);
touch.set(cnVideo(),  Video);
