type Direction = 1 | 0 | -1;

export class Input{
    private static axisX : Direction = 0;

    public static getAxisX(){
        return this.axisX
    }

    public static listen(){
        document.addEventListener("keydown",(event)=>{
            switch (event.key) {
                case "q":
                case "Q":
                    this.axisX = -1;
                    break;
                case "d":
                case "D":
                    this.axisX = 1;
                    break;
                default:
                    break;
            }
        });
        document.addEventListener("keyup",(event)=>{
            switch (event.key) {
                case "q":
                case "Q":
                case "d":
                case "D":
                    this.axisX = 0;
                    break;
                default:
                    break;
            }
        });

        
    }
}