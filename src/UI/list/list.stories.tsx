import List from '.';
import Item from './item';

export default {title: 'UI/List'};

export const base: React.FC = () => (
    <List>
        <Item>
            Item 1
        </Item>
        <Item>
            Item 2
        </Item>
    </List>
);
