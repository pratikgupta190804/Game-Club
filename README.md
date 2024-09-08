<h1>Game Club</h1>
    <p><strong>Game Club</strong> is a React.js-based web application that fetches game images and data from a game API and displays them in an interactive interface for users. It provides a simple and engaging way to browse through different games with their relevant information.</p>

<h2>Features</h2>
    <ul>
        <li><strong>Dynamic Game Data</strong>: Fetches real-time game data and images.</li>
        <li><strong>Interactive UI</strong>: Responsive layout for a smooth user experience.</li>
        <li><strong>Search Functionality</strong>: Users can search for specific games.</li>
        <li><strong>Details View</strong>: Users can click on a game to see more detailed information.</li>
    </ul>

<h2>Live Demo</h2>
    <p>You can check out the live demo of the app here: <a href="your-demo-link">Game Hub Live</a></p>

<h2>Screenshots</h2>
    <img src="src/assets/GameClub webApp.png" alt="Game Hub Screenshot" />

<h2>Getting Started</h2>

 <h3>Prerequisites</h3>
    <p>To run this project locally, you need to have the following installed:</p>
    <ul>
        <li><strong>Node.js</strong> (v12 or above)</li>
        <li><strong>npm</strong> (comes with Node.js)</li>
        <li><strong>Git</strong> (optional, for cloning the repository)</li>
    </ul>

 <h3>Installation</h3>
    <ol>
        <li><strong>Clone the repository</strong>:
            <pre><code>git clone https://github.com/pratikgupta190804/Game-Club.gitcd game-club</code></pre>
        </li>
        <li><strong>Install dependencies</strong>:
            <pre><code>npm install</code></pre>
            <p>This will install all required packages listed in the <code>package.json</code> file.</p>
        </li>
        <li><strong>Get the API key</strong>:
            <p>Get the API key from:</p>
            <pre><code>https://rawg.io/apidocs</code></pre>
            <p>Create a <code>.env</code> file in the root directory and add:</p>
            <pre><code>REACT_APP_API_KEY=your_api_key_here</code></pre>
        </li>
        <li><strong>Run the development server</strong>:
            <pre><code>npm start</code></pre>
            <p>The app will now be running locally at <code>http://localhost:5173/code</code>.</p>
        </li>
    </ol>

 <h3>Deployment</h3>
<p>You can deploy the app using Vercel, Netlify, or any other hosting platform that supports React.js. To deploy with Vercel:</p>
    <ol>
        <li><strong>Install Vercel CLI</strong>:
            <pre><code>npm install -g vercel</code></pre>
        </li>
        <li><strong>Deploy</strong>:
            <pre><code>vercel</code></pre>
            <p>Follow the prompts to complete the deployment process.</p>
        </li>
    </ol>

<h2>Built With</h2>
    <ul>
        <li><strong>React.js</strong> – JavaScript library for building user interfaces</li>
        <li><strong>Axios</strong> – For fetching game data from the API</li>
        <li><strong>CSS</strong> – For styling the application</li>
    </ul>

<h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>
    <h2>License</h2>
 <p>This project is licensed under the MIT License.</p>
