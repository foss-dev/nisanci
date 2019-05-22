// reference: https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

/**
 * ansi color rgb reference: https://stackoverflow.com/a/33206814/3821823
 * description:
 *      \033[38;2;<r>;<g>;<b>m     #Select RGB foreground color
 *      \033[48;2;<r>;<g>;<b>m     #Select RGB background color
 * example 1:
 *      \033[38;2;255;82;197;48;2;155;106;0mHello
 * example 2:
 *      console.log("\033[48;2;255;69;0mHello", "\x1b[0m")
 * rgb colors: https://www.rapidtables.com/web/color/RGB_Color.html
 * true color: https://gist.github.com/XVilka/8346728
 */

/**
 * This colors only works on Node Runtime
 */

 enum NodeColors {
	Reset = "\x1b[0m",
    Bright = "\x1b[1m",
    Dim = "\x1b[2m",
    Underscore = "\x1b[4m",
    Blink = "\x1b[5m",
    Reverse = "\x1b[7m",
    Hidden = "\x1b[8m",

    FgBlack = "\x1b[30m",
    FgRed = "\x1b[31m",
    FgGreen = "\x1b[32m",
    FgYellow = "\x1b[33m",
    FgBlue = "\x1b[34m",
    FgMagenta = "\x1b[35m",
    FgCyan = "\x1b[36m",
    FgWhite = "\x1b[37m",

    BgBlack = "\x1b[40m",
    BgRed = "\x1b[41m",
    BgGreen = "\x1b[42m",
    BgYellow = "\x1b[43m",
    BgBlue = "\x1b[44m",
    BgMagenta = "\x1b[45m",
    BgCyan = "\x1b[46m",
    BgWhite = "\x1b[47m",
}

class Colors {
    
    /**
     * Static and readonly field. Shouldn't re-assign value.
     * This field works when you're working on Node runtime.
     */
    public static readonly Node = NodeColors

	/**
	 * 
	 * @param type - Type web or node
     * @deprecated Instead of this you should use Colors.TYPE_NAME
     * @example Colors.Node.BgWhite
	 */
	static GET(type: string) {
		if (type == "node") {
			return NodeColors
		} else {

		}
	}
}

export default Colors