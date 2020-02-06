export interface IZIndex {
    navBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
    progressBack: number;
    progressContent: number;
}

const zIndex: IZIndex = {
    navBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    progressBack: 1600,
    progressContent: 1601,
};

export default zIndex;
