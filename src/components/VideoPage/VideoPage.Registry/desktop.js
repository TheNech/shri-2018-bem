import { Registry } from '@bem-react/di';

import { Header, cnHeader } from '../../Header/Header@desktop';
import { Video, cnVideo } from '../../Video/Video@desktop';

export const desktop = new Registry({ id: 'platform' });

desktop.set(cnHeader(), Header);
desktop.set(cnVideo(),  Video);
