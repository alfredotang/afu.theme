interface HtmlBodyDefault {
    backgroundColor: string;
}

interface ThemeCoreColor {
    color: string;
    backgroundColor: string;
}
export interface Theme {
    body: HtmlBodyDefault;
    core: ThemeCoreColor;
}
