import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Plugin pour prendre en charge React

export default defineConfig({
  // Chemin du répertoire de votre projet
  root: __dirname,

  // URL de base pour résoudre les dépendances relatives
  base: '/',

  // Configuration du serveur de développement Vite
  server: {
    // Port à utiliser pour le serveur de développement
    port: 3000,
    // Ouvrir automatiquement le navigateur lors du démarrage du serveur
    open: true,
  },

  // Configuration de la construction de votre projet pour la production
  build: {
    // Répertoire de sortie pour les fichiers construits
    outDir: 'dist',
    // Contrôle la génération de sourcemap
    sourcemap: false,
    // Activer la minification des fichiers lors de la construction pour la production
    minify: true,
  },

  // Liste des plugins Vite à utiliser dans votre projet
  plugins: [
    // Plugin pour prendre en charge React
    react(),
  ],
});