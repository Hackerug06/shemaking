import fs from "fs/promises"
import path from "path"

async function setupDirectories() {
  const dirs = ["public/images", "public/songs", "app", "app/components", "app/music", "app/about"]

  console.log("Setting up project directories...")

  for (const dir of dirs) {
    try {
      await fs.mkdir(dir, { recursive: true })
      console.log(`✅ Created/Verified directory: ${dir}`)
    } catch (error) {
      console.error(`❌ Error creating directory ${dir}:`, error)
    }
  }
}

setupDirectories()

        
