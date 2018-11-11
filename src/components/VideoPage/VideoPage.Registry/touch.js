import { Registry } from '@bem-react/di';

import { Header, cnHeader } from '../../Header/Header@touch';
import { Video, cnVideo } from '../../Video/Video@touch';

export const desktop = new Registry({ id: 'platform' });

desktop.set(cnHeader(), Header);
desktop.set(cnVideo(),  Video);
