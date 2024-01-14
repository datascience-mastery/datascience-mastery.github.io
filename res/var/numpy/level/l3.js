k=0;
k++;
window["type"+k] = "message";
window["ti"+k] = "NumPy - Environment"; //title
window["msg"+k] = `
<p>Standard Python distribution doesn't come bundled with NumPy module. A lightweight alternative is to install NumPy using popular Python package installer, <b>pip</b>.</p>
${FullCode(`pip install numpy`)}
<p>The best way to enable NumPy is to use an installable binary package specific to your operating system. These binaries contain full SciPy stack (inclusive of NumPy, SciPy, matplotlib, IPython, SymPy and nose packages along with core Python).</p>
<h2>Windows</h2>
<p>Anaconda (from <a target="_blank" rel="nofollow" href="https://www.anaconda.com">https://www.anaconda.com</a>) is a free Python distribution for SciPy stack. It is also available for Linux and Mac.</p>
<p>Canopy (<a target="_blank" rel="nofollow" href="https://www.enthought.com/products/canopy/">https://www.enthought.com/products/canopy/</a>) is available as free as well as commercial distribution with full SciPy stack for Windows, Linux and Mac.</p>
<p>Python (x,y): It is a free Python distribution with SciPy stack and Spyder IDE for Windows OS. (Downloadable from <a target="_blank" rel="nofollow" href="https://python-xy.github.io/">https://www.python-xy.github.io/</a>)</p>
<h2>Linux</h2>
<p>Package managers of respective Linux distributions are used to install one or more packages in SciPy stack.</p>
<h2>For Ubuntu</h2>
${FullCode(`
sudo apt-get install python-numpy 
python-scipy python-matplotlibipythonipythonnotebook python-pandas
python-sympy python-nose`)}
`; //message

totalLevel = k;