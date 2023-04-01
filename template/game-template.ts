export abstract class GameTemplate {
    protected _gameName: string;
    protected abstract initialize(): string;
    protected abstract startPlay(): string;
    protected abstract endPlay(): string;

    /**
     * TS doens't support `final` so technically there is
     * no way to prevent a subcalss from overriding the method
     */
    public play() {
        this.initialize();
        this.startPlay();
        this.endPlay();
    }
}