import { Registry } from '@bem-react/di';

import { Header, cnHeader } from '../../Header/Header@desktop';
import { Video, cnVideo } from '../../Video/Video@desktop';
import { Container, cnContainer } from '../Container/Container@desktop';
import { Footer, cnFooter } from '../../Footer/Footer';

export const desktop = new Registry({ id: 'platform' });

desktop.set(cnHeader(), Header);
desktop.set(cnVideo(),  Video);
desktop.set(cnContainer(),  Container);
