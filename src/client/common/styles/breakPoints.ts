type IBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IBreakpointValues = { [key in IBreakpoint]: number };

export class BreakPoints {
    public breakpointValues: IBreakpointValues = {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    };

    private returnMediaValue(value: IBreakpoint | number): number {
        return typeof value === 'number' ? value : this.breakpointValues[value];
    }

    public up(value: IBreakpoint | number): string {
        return `@media only screen and (min-width: ${this.returnMediaValue(value)}px)`;
    }

    public down(value: IBreakpoint | number): string {
        return `@media only screen and (max-width: ${this.returnMediaValue(value) - 0.5}px)`;
    }

    public between(start: IBreakpoint | number, end: IBreakpoint | number) {
        return `@media only screen and (min-width: ${this.returnMediaValue(start)}px) 
                                   and (max-width: ${this.returnMediaValue(end) - 0.5}px)`;
    }

    public only(value: IBreakpoint | number): string {
        return `@media only screen and (min-width: ${this.returnMediaValue(value)}px) 
                                   and (max-width: ${this.returnMediaValue(value)}px)`;
    }
}

export default new BreakPoints();
