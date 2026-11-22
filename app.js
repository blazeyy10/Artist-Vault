// ArtistVault - Aesthetic Performer & Video Experience Engine

const STORAGE_KEY = 'performer_video_catalog_data_v2';

// High-res aesthetic curated seed data
const SEED_DATA = {
  performers: [
    {
      id: 'perf-1',
      name: 'Elena Rostova',
      stageName: 'ASTRAEA',
      role: 'Electric Violinist & Audio-Visual Composer',
      genre: 'Neo-Classical / Cyber-Electronic',
      bio: 'Pioneering the intersection of classical acoustics and futuristic synthesis. Astraea tours world arenas featuring immersive holographic lighting and custom electric carbon-fiber violins.',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
      coverUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85',
      socials: {
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com',
        twitter: 'https://www.x.com',
        website: 'https://astraeamusic.com'
      },
      createdAt: '2026-01-15'
    },
    {
      id: 'perf-2',
      name: 'Marcus "Cipher" Cole',
      stageName: 'Cipher Cole',
      role: 'Stand-up Comedian & Satirist',
      genre: 'Comedy / Satire',
      bio: 'Known for razor-sharp observational humor, improvised crowd dialogues, and viral philosophical storytelling. Headlining sold-out theaters across North America and Europe.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
      coverUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
      socials: {
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com',
        twitter: '',
        website: 'https://ciphercole.com'
      },
      createdAt: '2026-02-01'
    },
    {
      id: 'perf-3',
      name: 'Maya Chen',
      stageName: 'Maya Chen',
      role: 'Contemporary Choreographer & Kinetic Artist',
      genre: 'Modern Dance / Movement',
      bio: 'Redefining theatrical expression through physics, architectural space, and intense emotional choreography. Featured in Venice Biennale and high-fashion visual campaigns.',
      avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85',
      coverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1600&q=85',
      socials: {
        youtube: '',
        instagram: 'https://www.instagram.com',
        twitter: '',
        website: 'https://mayachen.art'
      },
      createdAt: '2026-02-18'
    },
    {
      id: 'perf-4',
      name: 'Julian Thorne',
      stageName: 'KAIROS',
      role: 'Cinematic Ambient Pianist & Sound Sculptor',
      genre: 'Ambient / Neo-Classical',
      bio: 'Crafting hypnotic piano arrangements and lush atmospheric soundscapes. His solo recordings have garnered over 50 million streams for deep focus and emotional soundtracks.',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=85',
      coverUrl: 'https://images.unsplash.com/photo-1520523839898-507127042a98?auto=format&fit=crop&w=1600&q=85',
      socials: {
        youtube: 'https://www.youtube.com',
        instagram: 'https://www.instagram.com',
        twitter: '',
        website: 'https://kairosmusic.io'
      },
      createdAt: '2026-02-20'
    }
  ],
  videos: [
    {
      id: 'vid-1',
      performerId: 'perf-1',
      title: 'Neon Requiem (Live at Tokyo Dome Arena 2026)',
      category: 'Live Concert',
      duration: '4:45',
      releaseYear: '2026',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnailUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
      description: 'Opening sequence featuring 40-piece choir, laser projection mapping, and custom synchronized LED violin bow.',
      createdAt: '2026-01-20'
    },
    {
      id: 'vid-2',
      performerId: 'perf-1',
      title: 'Vivaldi Winter Reimagined (Cyberpunk Edition)',
      category: 'Official Music Video',
      duration: '3:58',
      releaseYear: '2025',
      videoUrl: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
      thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
      description: 'Cinematic music video filmed in the snowy volcanic glaciers of Iceland.',
      createdAt: '2026-02-05'
    },
    {
      id: 'vid-3',
      performerId: 'perf-1',
      title: 'Midnight Improvisation: Modular Synth & Strings',
      category: 'Studio Session',
      duration: '9:12',
      releaseYear: '2026',
      videoUrl: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      description: 'Uncut, raw studio jam exploring pitch shifts and analog delay pedals.',
      createdAt: '2026-02-14'
    },
    {
      id: 'vid-4',
      performerId: 'perf-2',
      title: 'Why AI Will Never Master Awkward Small Talk',
      category: 'Stand-up Special',
      duration: '7:30',
      releaseYear: '2026',
      videoUrl: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
      thumbnailUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=800&q=80',
      description: 'Viral bit filmed live at the Comedy Underground in New York City.',
      createdAt: '2026-02-08'
    },
    {
      id: 'vid-5',
      performerId: 'perf-2',
      title: 'Airport Security: An Odyssey in 3 Acts',
      category: 'Live Clip',
      duration: '11:45',
      releaseYear: '2025',
      videoUrl: '',
      thumbnailUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
      description: 'Excerpt from Marcus’s second special "Frequent Flyer".',
      createdAt: '2026-02-10'
    },
    {
      id: 'vid-6',
      performerId: 'perf-3',
      title: 'Gravity & Grace - Solo Contemporary Premiere',
      category: 'Visual Film',
      duration: '5:15',
      releaseYear: '2026',
      videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
      thumbnailUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
      description: 'An exploration of architectural balance and physical weightlessness.',
      createdAt: '2026-02-20'
    },
    {
      id: 'vid-7',
      performerId: 'perf-4',
      title: 'Echoes of Solitude (Grand Piano in Kyoto Hall)',
      category: 'Acoustic Performance',
      duration: '6:42',
      releaseYear: '2026',
      videoUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      thumbnailUrl: 'https://images.unsplash.com/photo-1520523839898-507127042a98?auto=format&fit=crop&w=800&q=80',
      description: 'Recorded live on a 9-foot Steinway Concert Grand in natural reverb.',
      createdAt: '2026-02-22'
    }
  ]
};

// Application State
class AppState {
  constructor() {
    this.data = this.loadData();
    this.currentView = 'performers'; // 'performers', 'profile', 'all-videos'
    this.activePerformerId = null;
    this.searchQuery = '';
    this.selectedGenre = 'ALL';
    this.sortBy = 'newest';
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.performers && parsed.videos && parsed.performers.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading data:', e);
    }
    // Fallback to initial curated data
    this.saveData(SEED_DATA);
    return JSON.parse(JSON.stringify(SEED_DATA));
  }

  saveData(dataToSave) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave || this.data));
    } catch (e) {
      console.error('Error saving data:', e);
      showToast('Error saving data', 'error');
    }
  }

  resetToDefault() {
    this.data = JSON.parse(JSON.stringify(SEED_DATA));
    this.saveData();
    showToast('Catalog restored to original aesthetic sample');
  }

  // Performer Operations
  addPerformer(performer) {
    performer.id = 'perf-' + Date.now();
    performer.createdAt = new Date().toISOString().split('T')[0];
    this.data.performers.unshift(performer);
    this.saveData();
    return performer;
  }

  updatePerformer(id, updatedFields) {
    const idx = this.data.performers.findIndex(p => p.id === id);
    if (idx !== -1) {
      this.data.performers[idx] = { ...this.data.performers[idx], ...updatedFields };
      this.saveData();
      return this.data.performers[idx];
    }
    return null;
  }

  deletePerformer(id) {
    this.data.performers = this.data.performers.filter(p => p.id !== id);
    this.data.videos = this.data.videos.filter(v => v.performerId !== id);
    this.saveData();
    if (this.activePerformerId === id) {
      this.activePerformerId = null;
      this.currentView = 'performers';
    }
  }

  getPerformer(id) {
    return this.data.performers.find(p => p.id === id);
  }

  // Video Operations
  addVideo(video) {
    video.id = 'vid-' + Date.now();
    video.createdAt = new Date().toISOString().split('T')[0];
    this.data.videos.unshift(video);
    this.saveData();
    return video;
  }

  updateVideo(id, updatedFields) {
    const idx = this.data.videos.findIndex(v => v.id === id);
    if (idx !== -1) {
      this.data.videos[idx] = { ...this.data.videos[idx], ...updatedFields };
      this.saveData();
      return this.data.videos[idx];
    }
    return null;
  }

  deleteVideo(id) {
    this.data.videos = this.data.videos.filter(v => v.id !== id);
    this.saveData();
  }

  getPerformerVideos(performerId) {
    return this.data.videos.filter(v => v.performerId === performerId);
  }

  getVideo(id) {
    return this.data.videos.find(v => v.id === id);
  }

  getAllGenres() {
    const genres = new Set();
    this.data.performers.forEach(p => {
      if (p.genre) {
        p.genre.split(/[\/,]/).forEach(g => {
          const trimmed = g.trim();
          if (trimmed) genres.add(trimmed);
        });
      }
    });
    return Array.from(genres);
  }
}

const state = new AppState();

// YouTube helper to get embed URL
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : null;
}

// Toast Notifications
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  const bgColors = {
    success: 'bg-violet-950/90 border-violet-500/40 text-violet-100 shadow-violet-900/30',
    error: 'bg-rose-950/90 border-rose-500/40 text-rose-100 shadow-rose-900/30',
    info: 'bg-indigo-950/90 border-indigo-500/40 text-indigo-100 shadow-indigo-900/30'
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-xl shadow-2xl text-xs font-semibold tracking-wide transition-all duration-300 transform translate-y-4 opacity-0 ${bgColors[type] || bgColors.success}`;
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-violet-400 animate-ping"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Navigation Handlers
function navigateTo(view, performerId = null) {
  state.currentView = view;
  state.activePerformerId = performerId;

  const navPerformers = document.getElementById('navPerformers');
  const navVideos = document.getElementById('navVideos');

  if (view === 'performers' || view === 'profile') {
    navPerformers?.classList.add('text-white', 'bg-violet-600/30', 'border-violet-500/40', 'shadow-md', 'shadow-violet-600/20');
    navPerformers?.classList.remove('text-slate-400', 'hover:text-slate-200');
    navVideos?.classList.remove('text-white', 'bg-violet-600/30', 'border-violet-500/40', 'shadow-md', 'shadow-violet-600/20');
    navVideos?.classList.add('text-slate-400', 'hover:text-slate-200');
  } else if (view === 'all-videos') {
    navVideos?.classList.add('text-white', 'bg-violet-600/30', 'border-violet-500/40', 'shadow-md', 'shadow-violet-600/20');
    navVideos?.classList.remove('text-slate-400', 'hover:text-slate-200');
    navPerformers?.classList.remove('text-white', 'bg-violet-600/30', 'border-violet-500/40', 'shadow-md', 'shadow-violet-600/20');
    navPerformers?.classList.add('text-slate-400', 'hover:text-slate-200');
  }

  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Engine
function render() {
  const mainContent = document.getElementById('mainContent');
  if (!mainContent) return;

  if (state.currentView === 'performers') {
    renderPerformersView(mainContent);
  } else if (state.currentView === 'profile') {
    renderProfileView(mainContent, state.activePerformerId);
  } else if (state.currentView === 'all-videos') {
    renderAllVideosView(mainContent);
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Aesthetic Performers View
function renderPerformersView(container) {
  const q = state.searchQuery.toLowerCase().trim();
  const selectedGenre = state.selectedGenre;

  let performers = state.data.performers.filter(p => {
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      (p.stageName && p.stageName.toLowerCase().includes(q)) ||
      (p.role && p.role.toLowerCase().includes(q)) ||
      (p.bio && p.bio.toLowerCase().includes(q));

    const matchesGenre = selectedGenre === 'ALL' ||
      (p.genre && p.genre.toLowerCase().includes(selectedGenre.toLowerCase()));

    return matchesSearch && matchesGenre;
  });

  const allGenres = state.getAllGenres();

  container.innerHTML = `
    <!-- Hero Showcase Section -->
    <div class="relative rounded-3xl p-8 md:p-12 mb-10 overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-violet-950/40 backdrop-blur-2xl">
      <!-- Ambient light inside card -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full subtle-badge text-xs font-semibold uppercase tracking-wider mb-5">
          <span class="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
          <span>Curated Talent & Live Repertoire</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight hero-gradient-text leading-[1.1] mb-4">
          Discover Extraordinary Artists & Performances.
        </h1>

        <p class="text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-8 max-w-2xl">
          An aesthetic portfolio hub indexing world-class musicians, choreographers, and creators alongside their full video catalog.
        </p>

        <!-- Live Stats & CTA Buttons -->
        <div class="flex items-center gap-4 flex-wrap">
          <button onclick="openPerformerModal()"
                  class="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-500 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            <span>Add New Performer</span>
          </button>

          <button onclick="openVideoModal()"
                  class="px-5 py-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-violet-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all backdrop-blur-xl flex items-center gap-2.5">
            <i data-lucide="video" class="w-4 h-4 text-violet-400"></i>
            <span>Add Video Title</span>
          </button>

          <!-- Quick Stats Badges -->
          <div class="hidden sm:flex items-center gap-4 ml-auto pl-4 border-l border-white/10 text-xs">
            <div>
              <div class="text-xl font-extrabold text-white font-heading">${state.data.performers.length}</div>
              <div class="text-slate-400 uppercase tracking-wider text-[10px]">Artists</div>
            </div>
            <div>
              <div class="text-xl font-extrabold text-violet-300 font-heading">${state.data.videos.length}</div>
              <div class="text-slate-400 uppercase tracking-wider text-[10px]">Videos</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filter & Category Section -->
    <div class="mb-8 flex items-center justify-between gap-4 flex-wrap">
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button onclick="filterByGenre('ALL')"
                class="px-4 py-2 rounded-xl text-xs font-bold transition-all ${state.selectedGenre === 'ALL' ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-white/5'}">
          All Artists
        </button>
        ${allGenres.map(g => `
          <button onclick="filterByGenre('${g}')"
                  class="px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${state.selectedGenre === g ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-white/5'}">
            ${g}
          </button>
        `).join('')}
      </div>

      <div class="text-xs text-slate-400 font-medium">
        Showing <span class="text-white font-bold">${performers.length}</span> artists
      </div>
    </div>

    <!-- Performers Grid -->
    ${performers.length === 0 ? `
      <div class="text-center py-20 px-4 rounded-3xl border border-white/5 bg-slate-900/40 backdrop-blur-xl">
        <div class="w-16 h-16 rounded-2xl bg-violet-950/40 border border-violet-800/40 flex items-center justify-center mx-auto text-violet-400 mb-4">
          <i data-lucide="users" class="w-7 h-7"></i>
        </div>
        <h3 class="text-xl font-bold text-white mb-2">No performers found</h3>
        <p class="text-slate-400 text-sm max-w-md mx-auto mb-6">
          ${q ? `No performers matching "${state.searchQuery}". Try a different keyword.` : 'You haven’t added any performers yet.'}
        </p>
        <button onclick="openPerformerModal()" class="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold inline-flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Performer
        </button>
      </div>
    ` : `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        ${performers.map(p => {
          const videos = state.getPerformerVideos(p.id);
          return `
            <div class="glass-card rounded-3xl overflow-hidden flex flex-col group border border-white/8 hover:border-violet-500/40 transition-all duration-300">
              <!-- Cover Header with Aspect Ratio -->
              <div class="relative h-48 bg-slate-900 overflow-hidden cursor-pointer" onclick="navigateTo('profile', '${p.id}')">
                <img src="${p.coverUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'}"
                     alt="${p.name} cover"
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                
                <!-- Video Count Badge -->
                <div class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-bold text-white border border-white/15 flex items-center gap-1.5 shadow-xl">
                  <i data-lucide="film" class="w-3.5 h-3.5 text-violet-400"></i>
                  <span>${videos.length} ${videos.length === 1 ? 'Video' : 'Videos'}</span>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-6 pt-0 flex-1 flex flex-col relative">
                <!-- Avatar -->
                <div class="flex items-end justify-between -mt-12 mb-4">
                  <img src="${p.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'}"
                       alt="${p.name}"
                       class="w-20 h-20 rounded-2xl object-cover ring-4 ring-slate-950 shadow-2xl bg-slate-900 cursor-pointer hover:opacity-90 transition-opacity"
                       onclick="navigateTo('profile', '${p.id}')">
                  
                  <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-violet-950/60 border border-violet-800/40 text-violet-300">
                    ${p.genre ? p.genre.split('/')[0].trim() : 'Artist'}
                  </span>
                </div>

                <!-- Titles -->
                <div class="mb-3">
                  <h3 class="font-extrabold text-xl text-white tracking-tight hover:text-violet-300 transition-colors cursor-pointer"
                      onclick="navigateTo('profile', '${p.id}')">
                    ${p.name}
                  </h3>
                  ${p.stageName && p.stageName !== p.name ? `
                    <div class="text-violet-400 font-bold text-xs tracking-wider uppercase mt-0.5">${p.stageName}</div>
                  ` : ''}
                  <p class="text-slate-400 text-xs mt-1 font-medium truncate">${p.role || 'Performer'}</p>
                </div>

                <!-- Bio Snippet -->
                <p class="text-slate-300 text-xs line-clamp-2 leading-relaxed mb-5 flex-1 font-light">
                  ${p.bio || 'Curated portfolio and performance archive.'}
                </p>

                <!-- Actions Footer -->
                <div class="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button onclick="navigateTo('profile', '${p.id}')"
                          class="px-3.5 py-2 rounded-xl bg-violet-600/20 hover:bg-violet-600 text-violet-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 border border-violet-500/20">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                    <span>View Profile</span>
                  </button>

                  <div class="flex items-center gap-1">
                    <button onclick="openVideoModal(null, '${p.id}')" title="Add Video to Performer"
                            class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors">
                      <i data-lucide="video" class="w-4 h-4 text-violet-400"></i>
                    </button>
                    <button onclick="openPerformerModal('${p.id}')" title="Edit Profile"
                            class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors">
                      <i data-lucide="edit-3" class="w-4 h-4"></i>
                    </button>
                    <button onclick="confirmDeletePerformer('${p.id}')" title="Delete Performer"
                            class="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 transition-colors">
                      <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

// 2. Aesthetic Profile & Video Catalog View
function renderProfileView(container, performerId) {
  const performer = state.getPerformer(performerId);
  if (!performer) {
    container.innerHTML = `
      <div class="text-center py-20">
        <h2 class="text-2xl font-bold text-white mb-2">Performer not found</h2>
        <button onclick="navigateTo('performers')" class="px-5 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold">
          Return to Artists
        </button>
      </div>
    `;
    return;
  }

  const videos = state.getPerformerVideos(performer.id);

  container.innerHTML = `
    <!-- Back Button -->
    <div class="mb-6">
      <button onclick="navigateTo('performers')" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Back to Artists Directory</span>
      </button>
    </div>

    <!-- Cinematic Profile Banner -->
    <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-10 bg-slate-950">
      <!-- High-res Backdrop Banner -->
      <div class="relative h-72 md:h-96 w-full bg-slate-900 overflow-hidden">
        <img src="${performer.coverUrl || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85'}"
             alt="Cover"
             class="w-full h-full object-cover opacity-60">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>

        <!-- Top Right Actions -->
        <div class="absolute top-5 right-5 flex items-center gap-2.5">
          <button onclick="openPerformerModal('${performer.id}')"
                  class="px-3.5 py-2 rounded-xl bg-slate-950/70 hover:bg-slate-900 backdrop-blur-xl border border-white/15 text-xs font-bold text-white shadow-xl transition-all flex items-center gap-1.5">
            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Profile
          </button>
          <button onclick="confirmDeletePerformer('${performer.id}')"
                  class="px-3.5 py-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/80 backdrop-blur-xl border border-rose-800/40 text-xs font-bold text-rose-300 shadow-xl transition-all flex items-center gap-1.5">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Delete
          </button>
        </div>
      </div>

      <!-- Profile Header Details -->
      <div class="px-6 md:px-10 pb-8 pt-0 relative">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-20 md:-mt-24 mb-6">
          <div class="flex flex-col sm:flex-row sm:items-end gap-6">
            <img src="${performer.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'}"
                 alt="${performer.name}"
                 class="w-32 h-32 md:w-40 md:h-40 rounded-3xl object-cover ring-4 ring-slate-950 shadow-2xl bg-slate-900 shrink-0">
            
            <div class="pb-2">
              <div class="flex items-center gap-2.5 flex-wrap">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-violet-600/30 text-violet-300 border border-violet-500/30">
                  ${performer.genre || 'Performer'}
                </span>
                <span class="text-xs text-slate-400 font-medium">Added ${performer.createdAt || '2026'}</span>
              </div>

              <h1 class="text-4xl md:text-5xl font-black text-white tracking-tight mt-2 flex items-center gap-3">
                ${performer.name}
              </h1>

              ${performer.stageName && performer.stageName !== performer.name ? `
                <div class="text-violet-400 font-extrabold text-sm tracking-wider uppercase mt-1">Stage Alias: "${performer.stageName}"</div>
              ` : ''}

              <p class="text-slate-300 text-sm font-medium mt-1">${performer.role || 'Artist / Performer'}</p>
            </div>
          </div>

          <!-- Add Video CTA -->
          <button onclick="openVideoModal(null, '${performer.id}')"
                  class="px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-violet-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 self-start md:self-auto">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            <span>Add Video for ${performer.name.split(' ')[0]}</span>
          </button>
        </div>

        <!-- Biography & Social Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-white/8">
          <div class="lg:col-span-2">
            <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2.5">Artist Biography</h4>
            <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-light">
              ${performer.bio || 'No biography written for this performer yet.'}
            </p>
          </div>

          <!-- Connect & Stats -->
          <div class="p-5 rounded-2xl bg-slate-900/60 border border-white/8 backdrop-blur-xl space-y-4">
            <div>
              <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Performance Archive</h4>
              <div class="text-2xl font-black text-white font-heading">${videos.length} <span class="text-xs font-normal text-slate-400">Recorded Titles</span></div>
            </div>

            ${performer.socials && Object.values(performer.socials).some(Boolean) ? `
              <div>
                <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Official Channels</h4>
                <div class="flex items-center gap-2 flex-wrap">
                  ${performer.socials.website ? `
                    <a href="${performer.socials.website}" target="_blank" rel="noopener noreferrer"
                       class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-colors">
                      <i data-lucide="globe" class="w-3.5 h-3.5 text-emerald-400"></i> Website
                    </a>
                  ` : ''}
                  ${performer.socials.youtube ? `
                    <a href="${performer.socials.youtube}" target="_blank" rel="noopener noreferrer"
                       class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-colors">
                      <i data-lucide="youtube" class="w-3.5 h-3.5 text-rose-500"></i> YouTube
                    </a>
                  ` : ''}
                  ${performer.socials.instagram ? `
                    <a href="${performer.socials.instagram}" target="_blank" rel="noopener noreferrer"
                       class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-colors">
                      <i data-lucide="instagram" class="w-3.5 h-3.5 text-pink-400"></i> Instagram
                    </a>
                  ` : ''}
                  ${performer.socials.twitter ? `
                    <a href="${performer.socials.twitter}" target="_blank" rel="noopener noreferrer"
                       class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 flex items-center gap-1.5 transition-colors">
                      <i data-lucide="twitter" class="w-3.5 h-3.5 text-sky-400"></i> X
                    </a>
                  ` : ''}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    </div>

    <!-- Video Catalog Section -->
    <div class="mb-12">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <span>Video Repertoire</span>
            <span class="text-xs px-3 py-1 rounded-full bg-violet-600/30 text-violet-300 font-bold border border-violet-500/30">
              ${videos.length} Titles
            </span>
          </h2>
          <p class="text-slate-400 text-xs sm:text-sm mt-1">Concerts, official recordings, clips, and improvisations.</p>
        </div>

        <button onclick="openVideoModal(null, '${performer.id}')"
                class="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg shadow-violet-600/20">
          <i data-lucide="plus" class="w-4 h-4"></i> Add Video
        </button>
      </div>

      ${videos.length === 0 ? `
        <div class="text-center py-16 px-4 rounded-3xl border border-dashed border-white/10 bg-slate-900/30 backdrop-blur-xl">
          <div class="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center mx-auto text-slate-500 mb-3">
            <i data-lucide="film" class="w-6 h-6"></i>
          </div>
          <h3 class="text-base font-bold text-white mb-1">No videos cataloged yet</h3>
          <p class="text-slate-400 text-xs max-w-sm mx-auto mb-5">
            Add recording titles, performance clips, or YouTube links to build ${performer.name}'s library.
          </p>
          <button onclick="openVideoModal(null, '${performer.id}')"
                  class="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold inline-flex items-center gap-2">
            <i data-lucide="plus" class="w-4 h-4"></i> Add First Video
          </button>
        </div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${videos.map(v => renderAestheticVideoCard(v, performer, true)).join('')}
        </div>
      `}
    </div>
  `;
}

// 3. Global All Videos View
function renderAllVideosView(container) {
  const q = state.searchQuery.toLowerCase().trim();

  let videosWithPerformers = state.data.videos.map(v => {
    const performer = state.getPerformer(v.performerId);
    return { video: v, performer };
  }).filter(({ video, performer }) => {
    if (!q) return true;
    const matchesVideo = video.title.toLowerCase().includes(q) ||
                         (video.category && video.category.toLowerCase().includes(q)) ||
                         (video.description && video.description.toLowerCase().includes(q));
    const matchesPerformer = performer && (
      performer.name.toLowerCase().includes(q) ||
      (performer.stageName && performer.stageName.toLowerCase().includes(q))
    );
    return matchesVideo || matchesPerformer;
  });

  container.innerHTML = `
    <!-- Top Header -->
    <div class="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
          <span>Global Video Index</span>
          <span class="text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 font-bold border border-violet-500/30">
            ${videosWithPerformers.length} Titles
          </span>
        </h1>
        <p class="text-slate-400 text-sm mt-1">Explore all performance footage and cataloged videos across all creators.</p>
      </div>

      <button onclick="openVideoModal()"
              class="px-5 py-2.5 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-xl shadow-violet-600/30 transition-all flex items-center gap-2 self-start md:self-auto">
        <i data-lucide="plus-circle" class="w-4 h-4"></i>
        <span>Add New Video</span>
      </button>
    </div>

    <!-- Video Grid -->
    ${videosWithPerformers.length === 0 ? `
      <div class="text-center py-20 px-4 rounded-3xl border border-white/5 bg-slate-900/40">
        <div class="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-500 mb-4">
          <i data-lucide="video-off" class="w-7 h-7"></i>
        </div>
        <h3 class="text-lg font-bold text-white mb-1">No videos found</h3>
        <p class="text-slate-400 text-xs max-w-sm mx-auto mb-6">
          ${q ? `No videos matching "${state.searchQuery}". Try searching for another performer or video title.` : 'No videos have been added yet.'}
        </p>
        <button onclick="openVideoModal()" class="px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold inline-flex items-center gap-2">
          <i data-lucide="plus-circle" class="w-4 h-4"></i> Add Video
        </button>
      </div>
    ` : `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${videosWithPerformers.map(({ video, performer }) => renderAestheticVideoCard(video, performer, false)).join('')}
      </div>
    `}
  `;
}

// Aesthetic Video Card Component with Play Preview
function renderAestheticVideoCard(video, performer, isInsidePerformerProfile = false) {
  const thumbnail = video.thumbnailUrl || (performer ? performer.coverUrl : null) || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80';
  const hasLink = Boolean(video.videoUrl);

  return `
    <div class="glass-card rounded-3xl overflow-hidden flex flex-col group border border-white/8 hover:border-violet-500/40 transition-all duration-300">
      <!-- Thumbnail Video Screen -->
      <div class="relative aspect-video bg-slate-900 overflow-hidden cursor-pointer" onclick="openCinemaModal('${video.id}')">
        <img src="${thumbnail}"
             alt="${video.title}"
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75">
        
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        <!-- Center Play Button with Glow -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="play-btn-circle">
            <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
          </div>
        </div>

        <!-- Badges on Thumbnail -->
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-violet-300 border border-white/10 uppercase tracking-wider">
            ${video.category || 'Performance'}
          </span>
        </div>

        <div class="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-950/90 backdrop-blur-md text-[11px] font-bold text-slate-300 border border-white/10">
          <i data-lucide="clock" class="w-3 h-3 text-slate-400"></i>
          <span>${video.duration || 'Video'}</span>
        </div>
      </div>

      <!-- Video Details Body -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- Performer Pill if not inside profile -->
          ${!isInsidePerformerProfile && performer ? `
            <div class="flex items-center gap-2 mb-2.5 cursor-pointer" onclick="navigateTo('profile', '${performer.id}')">
              <img src="${performer.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}"
                   alt="${performer.name}"
                   class="w-5 h-5 rounded-full object-cover">
              <span class="text-xs text-slate-300 hover:text-violet-300 font-bold transition-colors truncate">
                ${performer.name}
              </span>
            </div>
          ` : ''}

          <!-- Video Title -->
          <h3 class="font-extrabold text-base text-white group-hover:text-violet-300 transition-colors leading-snug cursor-pointer line-clamp-2 mb-2"
              onclick="openCinemaModal('${video.id}')">
            ${video.title}
          </h3>

          ${video.description ? `
            <p class="text-slate-400 text-xs font-light line-clamp-2 leading-relaxed mb-4">
              ${video.description}
            </p>
          ` : ''}
        </div>

        <!-- Bottom Actions -->
        <div class="pt-3 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
          <button onclick="openCinemaModal('${video.id}')"
                  class="px-3 py-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600 text-violet-300 hover:text-white text-xs font-bold transition-all flex items-center gap-1.5">
            <i data-lucide="play" class="w-3 h-3 fill-current"></i>
            <span>Watch / Details</span>
          </button>

          <div class="flex items-center gap-1">
            <button onclick="openVideoModal('${video.id}', '${video.performerId}')" title="Edit Video"
                    class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="confirmDeleteVideo('${video.id}')" title="Delete Video"
                    class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 transition-colors">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. Cinema Video Player Modal
function openCinemaModal(videoId) {
  const video = state.getVideo(videoId);
  if (!video) return;

  const performer = state.getPerformer(video.performerId);
  const modal = document.getElementById('cinemaModal');
  const modalContent = document.getElementById('cinemaModalBody');
  if (!modal || !modalContent) return;

  const embedUrl = getYouTubeEmbedUrl(video.videoUrl);

  modalContent.innerHTML = `
    <!-- Video Player Frame -->
    <div class="relative aspect-video w-full bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      ${embedUrl ? `
        <iframe src="${embedUrl}"
                class="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      ` : video.videoUrl ? `
        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-slate-900 to-violet-950/40">
          <i data-lucide="external-link" class="w-12 h-12 text-violet-400 mb-3"></i>
          <h4 class="text-lg font-bold text-white mb-2">External Video Link</h4>
          <p class="text-slate-400 text-xs max-w-sm mb-4">This video is hosted on an external platform.</p>
          <a href="${video.videoUrl}" target="_blank" rel="noopener noreferrer"
             class="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg inline-flex items-center gap-2">
            Open Video in New Tab
          </a>
        </div>
      ` : `
        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-950">
          <img src="${video.thumbnailUrl || (performer ? performer.coverUrl : '')}" class="absolute inset-0 w-full h-full object-cover opacity-30">
          <div class="relative z-10">
            <i data-lucide="film" class="w-12 h-12 text-slate-500 mx-auto mb-2"></i>
            <h4 class="text-base font-bold text-white mb-1">Performance Recording Title</h4>
            <p class="text-slate-400 text-xs">No external stream URL attached to this video title.</p>
          </div>
        </div>
      `}
    </div>

    <!-- Details under video -->
    <div class="mt-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-violet-600/30 text-violet-300 border border-violet-500/30">
            ${video.category || 'Performance'}
          </span>
          ${video.duration ? `<span class="text-xs text-slate-400 font-medium">• ${video.duration}</span>` : ''}
          ${video.releaseYear ? `<span class="text-xs text-slate-400 font-medium">• ${video.releaseYear}</span>` : ''}
        </div>
        <h2 class="text-2xl font-black text-white leading-tight">${video.title}</h2>
        ${performer ? `
          <div class="flex items-center gap-2 mt-3 cursor-pointer" onclick="closeCinemaModal(); navigateTo('profile', '${performer.id}')">
            <img src="${performer.avatarUrl}" class="w-8 h-8 rounded-full object-cover ring-2 ring-violet-500/40">
            <div>
              <div class="text-xs font-bold text-white hover:text-violet-300 transition-colors">${performer.name}</div>
              <div class="text-[11px] text-slate-400">${performer.role || 'Artist'}</div>
            </div>
          </div>
        ` : ''}
      </div>

      <div class="flex items-center gap-2 self-start">
        <button onclick="closeCinemaModal(); openVideoModal('${video.id}', '${video.performerId}')"
                class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center gap-1.5">
          <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> Edit Video
        </button>
      </div>
    </div>

    ${video.description ? `
      <div class="mt-4 pt-4 border-t border-white/5">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">About This Performance</h4>
        <p class="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">${video.description}</p>
      </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (window.lucide) window.lucide.createIcons();
}

function closeCinemaModal() {
  const modal = document.getElementById('cinemaModal');
  const modalContent = document.getElementById('cinemaModalBody');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (modalContent) modalContent.innerHTML = ''; // Stop video playback
  }
}

// Genre Filter
function filterByGenre(genre) {
  state.selectedGenre = genre;
  render();
}

// Performer Modal Functions
function openPerformerModal(performerId = null) {
  const modal = document.getElementById('performerModal');
  const titleEl = document.getElementById('performerModalTitle');
  const form = document.getElementById('performerForm');

  if (!modal || !form) return;

  form.reset();
  document.getElementById('performerIdInput').value = performerId || '';

  if (performerId) {
    const p = state.getPerformer(performerId);
    if (p) {
      titleEl.innerText = 'Edit Performer Profile';
      document.getElementById('perfName').value = p.name || '';
      document.getElementById('perfStageName').value = p.stageName || '';
      document.getElementById('perfRole').value = p.role || '';
      document.getElementById('perfGenre').value = p.genre || '';
      document.getElementById('perfBio').value = p.bio || '';
      document.getElementById('perfAvatarUrl').value = p.avatarUrl || '';
      document.getElementById('perfCoverUrl').value = p.coverUrl || '';
      document.getElementById('perfYoutube').value = (p.socials && p.socials.youtube) || '';
      document.getElementById('perfInstagram').value = (p.socials && p.socials.instagram) || '';
      document.getElementById('perfWebsite').value = (p.socials && p.socials.website) || '';
    }
  } else {
    titleEl.innerText = 'Add New Performer';
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closePerformerModal() {
  const modal = document.getElementById('performerModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handlePerformerFormSubmit(e) {
  e.preventDefault();
  const performerId = document.getElementById('performerIdInput').value;

  const data = {
    name: document.getElementById('perfName').value.trim(),
    stageName: document.getElementById('perfStageName').value.trim(),
    role: document.getElementById('perfRole').value.trim(),
    genre: document.getElementById('perfGenre').value.trim(),
    bio: document.getElementById('perfBio').value.trim(),
    avatarUrl: document.getElementById('perfAvatarUrl').value.trim() || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverUrl: document.getElementById('perfCoverUrl').value.trim() || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=85',
    socials: {
      youtube: document.getElementById('perfYoutube').value.trim(),
      instagram: document.getElementById('perfInstagram').value.trim(),
      website: document.getElementById('perfWebsite').value.trim()
    }
  };

  if (!data.name) {
    showToast('Artist name is required', 'error');
    return;
  }

  if (performerId) {
    state.updatePerformer(performerId, data);
    showToast(`Updated "${data.name}" profile`);
  } else {
    const created = state.addPerformer(data);
    showToast(`Created artist "${data.name}"`);
    navigateTo('profile', created.id);
  }

  closePerformerModal();
  render();
}

function confirmDeletePerformer(performerId) {
  const performer = state.getPerformer(performerId);
  if (!performer) return;

  const videos = state.getPerformerVideos(performerId);
  if (confirm(`Delete "${performer.name}" and all ${videos.length} videos from the catalog?`)) {
    state.deletePerformer(performerId);
    showToast(`Deleted ${performer.name}`);
    render();
  }
}

// Video Modal Functions
function openVideoModal(videoId = null, presetPerformerId = null) {
  const modal = document.getElementById('videoModal');
  const titleEl = document.getElementById('videoModalTitle');
  const form = document.getElementById('videoForm');
  const performerSelect = document.getElementById('vidPerformerSelect');

  if (!modal || !form || !performerSelect) return;

  if (state.data.performers.length === 0) {
    showToast('Add a performer first before adding videos.', 'error');
    openPerformerModal();
    return;
  }

  performerSelect.innerHTML = state.data.performers.map(p => `
    <option value="${p.id}">${p.name} ${p.stageName ? `("${p.stageName}")` : ''}</option>
  `).join('');

  form.reset();
  document.getElementById('videoIdInput').value = videoId || '';

  if (videoId) {
    const v = state.data.videos.find(item => item.id === videoId);
    if (v) {
      titleEl.innerText = 'Edit Video';
      performerSelect.value = v.performerId;
      document.getElementById('vidTitle').value = v.title || '';
      document.getElementById('vidCategory').value = v.category || '';
      document.getElementById('vidDuration').value = v.duration || '';
      document.getElementById('vidYear').value = v.releaseYear || '';
      document.getElementById('vidUrl').value = v.videoUrl || '';
      document.getElementById('vidThumbnail').value = v.thumbnailUrl || '';
      document.getElementById('vidDesc').value = v.description || '';
    }
  } else {
    titleEl.innerText = 'Add New Video Title';
    if (presetPerformerId) {
      performerSelect.value = presetPerformerId;
    } else if (state.activePerformerId) {
      performerSelect.value = state.activePerformerId;
    }
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleVideoFormSubmit(e) {
  e.preventDefault();
  const videoId = document.getElementById('videoIdInput').value;

  const data = {
    performerId: document.getElementById('vidPerformerSelect').value,
    title: document.getElementById('vidTitle').value.trim(),
    category: document.getElementById('vidCategory').value.trim(),
    duration: document.getElementById('vidDuration').value.trim(),
    releaseYear: document.getElementById('vidYear').value.trim(),
    videoUrl: document.getElementById('vidUrl').value.trim(),
    thumbnailUrl: document.getElementById('vidThumbnail').value.trim(),
    description: document.getElementById('vidDesc').value.trim()
  };

  if (!data.title) {
    showToast('Video title is required', 'error');
    return;
  }

  if (videoId) {
    state.updateVideo(videoId, data);
    showToast(`Updated "${data.title}"`);
  } else {
    state.addVideo(data);
    showToast(`Added video "${data.title}"`);
  }

  closeVideoModal();
  render();
}

function confirmDeleteVideo(videoId) {
  const v = state.data.videos.find(item => item.id === videoId);
  if (!v) return;

  if (confirm(`Delete video "${v.title}"?`)) {
    state.deleteVideo(videoId);
    showToast(`Deleted video "${v.title}"`);
    render();
  }
}

// Backup & Export / Import
function exportCatalogJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.data, null, 2));
  const a = document.createElement('a');
  a.setAttribute("href", dataStr);
  a.setAttribute("download", `artistvault_backup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
  showToast('Exported catalog backup JSON');
}

function triggerImportJSON() {
  const input = document.getElementById('jsonFileInput');
  if (input) input.click();
}

function handleJSONFileSelected(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const parsed = JSON.parse(event.target.result);
      if (Array.isArray(parsed.performers) && Array.isArray(parsed.videos)) {
        state.data = parsed;
        state.saveData();
        showToast('Imported catalog backup successfully!');
        render();
      } else {
        showToast('Invalid format. Must contain performers & videos lists.', 'error');
      }
    } catch (err) {
      showToast('Error reading JSON file', 'error');
    }
  };
  reader.readAsText(file);
}

// Global search input listener
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      render();
    });
  }

  render();
});
