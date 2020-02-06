import { stringToNumberFormat } from '@common/utils/styleUtils';

export interface ILayoutOption {
    header: {
        width: string;
        smWidth: string;
    };
    sidebar: {
        width: string;
        paddingTop: string;
        paddingBottom: string;
        paddingRight: string;
        paddingLeft: string;
    };
}

const layout: ILayoutOption = {
    header: {
        width: '96px',
        smWidth: '56px',
    },
    sidebar: {
        width: '330px',
        paddingTop: '24px',
        paddingBottom: '24px',
        paddingRight: '24px',
        paddingLeft: '24px',
    },
};

export default layout;
