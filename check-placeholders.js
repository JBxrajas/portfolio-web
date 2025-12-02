// Quick check script to find placeholders that need updating
const fs = require('fs');
const path = require('path');

console.log('\n🔍 Checking for placeholders that need updating...\n');

let foundIssues = false;

// Check projects.ts
const projectsPath = path.join(__dirname, 'data', 'projects.ts');
const projectsContent = fs.readFileSync(projectsPath, 'utf8');

if (projectsContent.includes('your-cypress-project') || 
    projectsContent.includes('your-playwright-project') ||
    projectsContent.includes('your-selenium-project')) {
  console.log('⚠️  PROJECTS FILE (data/projects.ts)');
  console.log('   Found placeholder GitHub URLs');
  console.log('   → Update with your actual repository names\n');
  foundIssues = true;
}

// Check page.tsx for LinkedIn
const pagePath = path.join(__dirname, 'app', 'page.tsx');
const pageContent = fs.readFileSync(pagePath, 'utf8');

if (pageContent.includes('jesus-barajas-villegas') && 
    pageContent.includes('linkedin.com/in/jesus-barajas-villegas/')) {
  console.log('ℹ️  HOME PAGE (app/page.tsx)');
  console.log('   LinkedIn URL is set to a guessed format');
  console.log('   → Verify this matches your actual LinkedIn profile\n');
}

if (!foundIssues) {
  console.log('✅ No obvious placeholders found!');
  console.log('   Review QUICK_UPDATE_CHECKLIST.md to verify all information\n');
} else {
  console.log('📝 See QUICK_UPDATE_CHECKLIST.md for detailed instructions\n');
}
