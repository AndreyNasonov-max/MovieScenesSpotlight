export default function ProfileWidget() {
    return (
        <div class="max-w-4xl mx-auto p-4">
        <div class="flex items-center space-x-4">
          <img class="w-16 h-16 rounded-full" src="https://placehold.co/64x64" alt="Profile Picture" />
          <div>
            <h1 class="text-2xl font-bold">moviescenesspotlight</h1>
            <p class="text-zinc-500">MovieScenesSpotlight</p>
          </div>
        </div>
        <button class="mt-2 px-4 py-2 border rounded-lg text-zinc-700 hover:bg-zinc-100">
          Edit profile
        </button>
        <div class="mt-4 flex space-x-8">
          <div>
            <span class="font-bold">117</span>
            <span class="text-zinc-500">Following</span>
          </div>
          <div>
            <span class="font-bold">11.4K</span>
            <span class="text-zinc-500">Followers</span>
          </div>
          <div>
            <span class="font-bold">168.8K</span>
            <span class="text-zinc-500">Likes</span>
          </div>
        </div>
        <p class="mt-2 text-zinc-500">Thanks for watching, Will be uploading movie scenes non-stop.</p>
        <div class="mt-4 flex border-b">
          <button class="py-2 px-4 text-black border-b-2 border-black">Videos</button>
          <button class="py-2 px-4 text-zinc-500">Favorites</button>
          <button class="py-2 px-4 text-zinc-500">Liked</button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src="https://placehold.co/200x300"
              alt="Video Thumbnail"
            />
            <span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
              >Pinned</span
            >
            <div class="mt-2 flex items-center text-zinc-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
              <span>1117</span>
            </div>
            <p class="mt-1 text-sm">El Rey león - Enfrentando al pasado</p>
          </div>
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src="https://placehold.co/200x300"
              alt="Video Thumbnail"
            />
            <span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
              >Pinned</span
            >
            <div class="mt-2 flex items-center text-zinc-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
              <span>7400</span>
            </div>
            <p class="mt-1 text-sm">Beauty and the Beast Dance</p>
          </div>
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src="https://placehold.co/200x300"
              alt="Video Thumbnail"
            />
            <span class="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
              >Pinned</span
            >
            <div class="mt-2 flex items-center text-zinc-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
              <span>17.9K</span>
            </div>
            <p class="mt-1 text-sm">The Power of Staying True to Yourself</p>
          </div>
          <div class="relative">
            <img
              class="w-full h-48 object-cover"
              src="https://placehold.co/200x300"
              alt="Video Thumbnail"
            />
            <div class="mt-2 flex items-center text-zinc-500">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 17l5-5-5-5v10z" />
              </svg>
              <span>4137</span>
            </div>
            <p class="mt-1 text-sm">Espias con disfraz - Part 2</p>
          </div>
        </div>
      </div>
      
    )
}