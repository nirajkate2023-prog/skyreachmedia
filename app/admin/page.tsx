'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { authService, AdminUser } from '@/lib/auth';
import { blogService } from '@/lib/blogService';
import { BLOG_TEMPLATES } from '@/lib/blogTemplates';
import { BlogPost, BlogTemplateType } from '@/lib/types/blog';
import { getSupabaseConfig } from '@/lib/supabase';
import { BrandLogo } from '@/components/brand/BrandLogo';
import {
  PlusCircle,
  FileText,
  Edit3,
  Trash2,
  ExternalLink,
  LogOut,
  Database,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Save,
  Eye,
  RefreshCw,
  Download,
  Upload,
  Lock,
  Search,
  Check
} from 'lucide-react';

const CATEGORIES = [
  'Marketing Strategy',
  'Social Media',
  'Case Study',
  'Performance & SEO',
  'Creative Intelligence',
  'Brand Building',
  'Company News'
];

const PRESET_IMAGES = [
  { label: 'Data & Growth', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Social & Media', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Case Study & Analytics', url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Search & Performance', url: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1200&auto=format&fit=crop' },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<'posts' | 'editor' | 'settings'>('posts');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');
  const [hasCloudDb, setHasCloudDb] = useState(false);

  // Form State for Post Editor
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formSlug, setFormSlug] = useState('');
  const [formExcerpt, setFormExcerpt] = useState('');
  const [formCategory, setFormCategory] = useState(CATEGORIES[0]);
  const [formAuthorName, setFormAuthorName] = useState('Mayur');
  const [formAuthorRole, setFormAuthorRole] = useState('Head of Growth Strategy');
  const [formAuthorAvatar, setFormAuthorAvatar] = useState('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop');
  const [formHeroImage, setFormHeroImage] = useState(PRESET_IMAGES[0].url);
  const [formReadTime, setFormReadTime] = useState('5 min read');
  const [formPublishedDate, setFormPublishedDate] = useState('');
  const [formContentText, setFormContentText] = useState('');
  const [formTags, setFormTags] = useState('');
  const [formFeatured, setFormFeatured] = useState(false);
  const [formStatus, setFormStatus] = useState<'published' | 'draft'>('published');
  const [showPreview, setShowPreview] = useState(false);
  const [saveStatus, setSaveStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Settings State
  const [supabaseUrl, setSupabaseUrl] = useState('');
  const [supabaseKey, setSupabaseKey] = useState('');
  const [settingsNotice, setSettingsNotice] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Password update state
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [passNotice, setPassNotice] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Delete modal
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  useEffect(() => {
    if (!authService.isAuthenticated()) {
      router.replace('/admin/login');
      return;
    }
    setUser(authService.getCurrentUser());

    // Check cloud DB status
    const config = getSupabaseConfig();
    setHasCloudDb(Boolean(config));
    if (config) {
      setSupabaseUrl(config.url);
      setSupabaseKey(config.key);
    }

    loadPosts();
  }, [router]);

  const loadPosts = async () => {
    setLoading(true);
    const data = await blogService.getAllPosts(true);
    setPosts(data);
    setLoading(false);
  };

  // Reset form to blank or template
  const applyTemplate = (templateType: BlogTemplateType | 'blank') => {
    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    setFormPublishedDate(today);
    setEditingPostId(null);

    if (templateType === 'blank') {
      setFormTitle('');
      setFormSlug('');
      setFormExcerpt('');
      setFormCategory(CATEGORIES[0]);
      setFormHeroImage(PRESET_IMAGES[0].url);
      setFormContentText('');
      setFormTags('Marketing, Strategy');
      setFormFeatured(false);
      setFormStatus('published');
      setActiveTab('editor');
      return;
    }

    const tpl = BLOG_TEMPLATES.find((t) => t.id === templateType);
    if (!tpl) return;

    setFormTitle(tpl.defaultTitle);
    setFormSlug(tpl.defaultTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    setFormExcerpt(tpl.defaultExcerpt);
    setFormCategory(tpl.defaultCategory);
    setFormHeroImage(tpl.suggestedHeroImage);
    setFormContentText(tpl.defaultContent.join('\n\n'));
    setFormTags(tpl.defaultTags.join(', '));
    setFormFeatured(false);
    setFormStatus('published');
    setActiveTab('editor');
  };

  // Load existing post into editor
  const handleEditPost = (post: BlogPost) => {
    setEditingPostId(post.id);
    setFormTitle(post.title);
    setFormSlug(post.slug);
    setFormExcerpt(post.excerpt);
    setFormCategory(post.category);
    setFormAuthorName(post.author.name);
    setFormAuthorRole(post.author.role);
    setFormAuthorAvatar(post.author.avatar);
    setFormHeroImage(post.heroImage);
    setFormReadTime(post.readTime);
    setFormPublishedDate(post.publishedDate);
    setFormContentText(post.content.join('\n\n'));
    setFormTags(post.tags.join(', '));
    setFormFeatured(post.featured);
    setFormStatus(post.status || 'published');
    setActiveTab('editor');
  };

  // Save post
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveStatus(null);

    if (!formTitle.trim() || !formExcerpt.trim()) {
      setSaveStatus({ message: 'Title and Excerpt are required.', type: 'error' });
      return;
    }

    // Split content paragraphs
    const paragraphs = formContentText
      .split(/\n{2,}/)
      .map((p) => p.trim())
      .filter(Boolean);

    const tagsArray = formTags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const postData: Partial<BlogPost> & { title: string; excerpt: string } = {
      id: editingPostId || undefined,
      slug: formSlug.trim() || formTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: formTitle.trim(),
      excerpt: formExcerpt.trim(),
      category: formCategory,
      author: {
        name: formAuthorName.trim() || 'SkyReach Editorial',
        role: formAuthorRole.trim() || 'Growth Strategist',
        avatar: formAuthorAvatar.trim() || PRESET_IMAGES[0].url,
      },
      publishedDate: formPublishedDate.trim() || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: formReadTime.trim() || '5 min read',
      heroImage: formHeroImage.trim() || PRESET_IMAGES[0].url,
      featured: formFeatured,
      content: paragraphs.length > 0 ? paragraphs : ['Draft post content...'],
      tags: tagsArray.length > 0 ? tagsArray : ['SkyReach'],
      status: formStatus,
    };

    const res = await blogService.savePost(postData);

    if (res.success) {
      setSaveStatus({ message: editingPostId ? 'Article updated successfully!' : 'Article published successfully!', type: 'success' });
      await loadPosts();
      setTimeout(() => {
        setSaveStatus(null);
        setActiveTab('posts');
      }, 1000);
    } else {
      setSaveStatus({ message: res.error || 'Failed to save post', type: 'error' });
    }
  };

  // Delete post
  const handleDeletePost = async (id: string) => {
    const res = await blogService.deletePost(id);
    if (res.success) {
      setDeleteConfirmId(null);
      await loadPosts();
    }
  };

  // Save Supabase credentials from settings
  const handleSaveSupabaseConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsNotice(null);

    if (!supabaseUrl.trim() || !supabaseKey.trim()) {
      setSettingsNotice({ message: 'Both Supabase URL and Key are required', type: 'error' });
      return;
    }

    localStorage.setItem('skyreach_supabase_url', supabaseUrl.trim());
    localStorage.setItem('skyreach_supabase_key', supabaseKey.trim());
    setHasCloudDb(true);

    // Attempt cloud sync
    const syncRes = await blogService.syncAllToSupabase();
    if (syncRes.success) {
      setSettingsNotice({ message: `Connected to Supabase! Successfully synced ${syncRes.count} posts to cloud database.`, type: 'success' });
    } else {
      setSettingsNotice({ message: `Credentials saved locally. Cloud test notice: ${syncRes.error}`, type: 'error' });
    }
  };

  // Export JSON
  const handleExportJson = () => {
    const jsonString = JSON.stringify(posts, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skyreach-blog-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON
  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (Array.isArray(imported)) {
          localStorage.setItem('skyreach_blog_posts', JSON.stringify(imported));
          await loadPosts();
          setSettingsNotice({ message: `Imported ${imported.length} posts successfully!`, type: 'success' });
        }
      } catch (err) {
        setSettingsNotice({ message: 'Invalid JSON file format.', type: 'error' });
      }
    };
    reader.readAsText(file);
  };

  // Update password
  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPassNotice(null);
    const res = authService.updatePassword(currentPass, newPass);
    if (res.success) {
      setPassNotice({ message: 'Admin password updated successfully!', type: 'success' });
      setCurrentPass('');
      setNewPass('');
    } else {
      setPassNotice({ message: res.error || 'Password update failed', type: 'error' });
    }
  };

  const handleLogout = () => {
    authService.logout();
    router.replace('/admin/login');
  };

  const filteredPosts = posts.filter((p) => {
    const match =
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.author.name.toLowerCase().includes(searchFilter.toLowerCase());
    return match;
  });

  return (
    <div className="min-h-screen bg-[#07080B] text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center" aria-label="SkyReach Media Home">
              <BrandLogo variant="horizontal" className="h-8 w-auto" />
            </Link>
            <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-[11px] font-mono font-bold text-brand-orange uppercase">
              Admin Studio
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Database indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
              <span className={`w-2 h-2 rounded-full ${hasCloudDb ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              <span className="text-zinc-300">
                {hasCloudDb ? 'Cloud Supabase' : 'Local Persistent Storage'}
              </span>
            </div>

            {/* Link to live blog */}
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <span>View Blog</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            {/* Sign Out */}
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-xs font-mono text-red-400 transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setActiveTab('posts'); setEditingPostId(null); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'posts'
                  ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>All Articles ({posts.length})</span>
            </button>

            <button
              onClick={() => { applyTemplate('blank'); }}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'editor' && !editingPostId
                  ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <PlusCircle className="w-4 h-4" />
              <span>Create Article</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-brand-orange text-black shadow-lg shadow-brand-orange/20'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Database & Settings</span>
            </button>
          </div>

          {activeTab === 'posts' && (
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Filter articles..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange"
              />
            </div>
          )}
        </div>

        {/* ================= TAB 1: ALL POSTS ================= */}
        {activeTab === 'posts' && (
          <div>
            {/* Quick Template Launch Bar */}
            <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-brand-orange/10 via-brand-amber/5 to-transparent border border-brand-orange/20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    Quick Start with Editorial Templates
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Select a ready-to-use template to generate structured headings, excerpts, and layout:
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => applyTemplate('strategy')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all cursor-pointer"
                  >
                    🚀 Strategy Essay
                  </button>
                  <button
                    onClick={() => applyTemplate('casestudy')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all cursor-pointer"
                  >
                    📈 Case Study
                  </button>
                  <button
                    onClick={() => applyTemplate('guide')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all cursor-pointer"
                  >
                    🛠️ Growth Guide
                  </button>
                  <button
                    onClick={() => applyTemplate('announcement')}
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-white transition-all cursor-pointer"
                  >
                    📢 Announcement
                  </button>
                </div>
              </div>
            </div>

            {/* Articles Table */}
            {loading ? (
              <div className="p-16 text-center text-zinc-500 font-mono text-xs">
                Loading editorial articles...
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="p-16 text-center rounded-2xl bg-white/[0.02] border border-white/10">
                <FileText className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
                <h4 className="text-base font-bold text-white">No articles found</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Create your first blog post using one of the templates above.
                </p>
                <button
                  onClick={() => applyTemplate('strategy')}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-orange text-black font-bold text-xs uppercase cursor-pointer"
                >
                  Create With Strategy Template
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-white/5 border-b border-white/10 text-zinc-400 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Article</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Author</th>
                      <th className="py-3 px-4">Published</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filteredPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-white/[0.03] transition-colors">
                        <td className="py-4 px-4 max-w-md">
                          <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                              <Image
                                src={post.heroImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="truncate">
                              <div className="font-bold text-white truncate text-sm">
                                {post.title}
                              </div>
                              <div className="text-zinc-500 text-[11px] truncate">
                                /blog/{post.slug}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-brand-orange font-bold">
                            {post.category}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-zinc-300">
                          {post.author.name}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-zinc-400">
                          {post.publishedDate}
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              post.status === 'draft'
                                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                                : 'bg-green-500/15 text-green-400 border border-green-500/20'
                            }`}
                          >
                            {post.status || 'published'}
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap text-right">
                          <div className="inline-flex items-center gap-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              target="_blank"
                              title="View on site"
                              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </Link>

                            <button
                              onClick={() => handleEditPost(post)}
                              title="Edit article"
                              className="p-1.5 rounded-lg bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange transition-colors cursor-pointer"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => setDeleteConfirmId(post.id)}
                              title="Delete article"
                              className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 2: ARTICLE EDITOR ================= */}
        {activeTab === 'editor' && (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {editingPostId ? 'Edit Article' : 'Create New Article'}
                </h2>
                <p className="text-xs font-mono text-zinc-400">
                  {editingPostId ? `Modifying ID: ${editingPostId}` : 'Author a new strategic post for the SkyReach Media blog'}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{showPreview ? 'Hide Preview' : 'Live Preview'}</span>
                </button>
              </div>
            </div>

            {saveStatus && (
              <div
                className={`mb-6 p-4 rounded-xl text-xs font-mono flex items-center gap-2 ${
                  saveStatus.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/15 border border-red-500/30 text-red-400'
                }`}
              >
                {saveStatus.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{saveStatus.message}</span>
              </div>
            )}

            {/* Template Selector within editor */}
            {!editingPostId && (
              <div className="mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                <span className="text-xs font-mono text-zinc-400">Template Presets:</span>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => applyTemplate('strategy')}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 cursor-pointer"
                  >
                    Strategy
                  </button>
                  <button
                    type="button"
                    onClick={() => applyTemplate('casestudy')}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 cursor-pointer"
                  >
                    Case Study
                  </button>
                  <button
                    type="button"
                    onClick={() => applyTemplate('guide')}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 cursor-pointer"
                  >
                    Growth Guide
                  </button>
                  <button
                    type="button"
                    onClick={() => applyTemplate('announcement')}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-300 cursor-pointer"
                  >
                    Announcement
                  </button>
                  <button
                    type="button"
                    onClick={() => applyTemplate('blank')}
                    className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-400 cursor-pointer"
                  >
                    Clear Form
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSavePost} className="space-y-6">
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => {
                      setFormTitle(e.target.value);
                      if (!editingPostId) {
                        setFormSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
                      }
                    }}
                    placeholder="e.g. Scaling Performance Marketing in 2026"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-base font-bold text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                {/* Slug & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      URL Slug *
                    </label>
                    <input
                      type="text"
                      required
                      value={formSlug}
                      onChange={(e) => setFormSlug(e.target.value)}
                      placeholder="scaling-performance-marketing-2026"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Category
                    </label>
                    <select
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0F1015] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Summary / Excerpt * (1-2 sentences)
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formExcerpt}
                    onChange={(e) => setFormExcerpt(e.target.value)}
                    placeholder="Brief description that appears on the blog index cards and search engines..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                {/* Hero Image & Presets */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                    Hero Banner Image URL
                  </label>
                  <input
                    type="url"
                    value={formHeroImage}
                    onChange={(e) => setFormHeroImage(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                  />
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-zinc-500">Curated Presets:</span>
                    {PRESET_IMAGES.map((preset) => (
                      <button
                        key={preset.label}
                        type="button"
                        onClick={() => setFormHeroImage(preset.url)}
                        className={`text-[11px] font-mono px-2 py-1 rounded border cursor-pointer ${
                          formHeroImage === preset.url
                            ? 'bg-brand-orange text-black font-bold border-brand-orange'
                            : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Author Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={formAuthorName}
                      onChange={(e) => setFormAuthorName(e.target.value)}
                      placeholder="Mayur"
                      className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Author Role
                    </label>
                    <input
                      type="text"
                      value={formAuthorRole}
                      onChange={(e) => setFormAuthorRole(e.target.value)}
                      placeholder="Head of Growth Strategy"
                      className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={formReadTime}
                      onChange={(e) => setFormReadTime(e.target.value)}
                      placeholder="5 min read"
                      className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Content Editor */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Article Content (Paragraphs & Markdown)
                    </label>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Supports ### Headings, **Bold**, and separate paragraphs with double Enter
                    </span>
                  </div>
                  <textarea
                    rows={12}
                    required
                    value={formContentText}
                    onChange={(e) => setFormContentText(e.target.value)}
                    placeholder="Write article paragraphs here. Use a blank line between paragraphs..."
                    className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/10 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange leading-relaxed"
                  />
                </div>

                {/* Tags & Settings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formTags}
                      onChange={(e) => setFormTags(e.target.value)}
                      placeholder="AI Marketing, Performance, Pune"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Publication Status
                    </label>
                    <div className="flex items-center gap-4 py-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={formStatus === 'published'}
                          onChange={() => setFormStatus('published')}
                          className="text-brand-orange"
                        />
                        <span className="text-xs font-mono text-zinc-300">Published</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          value="draft"
                          checked={formStatus === 'draft'}
                          onChange={() => setFormStatus('draft')}
                          className="text-brand-orange"
                        />
                        <span className="text-xs font-mono text-zinc-300">Draft</span>
                      </label>

                      <label className="flex items-center gap-2 ml-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formFeatured}
                          onChange={(e) => setFormFeatured(e.target.checked)}
                          className="text-brand-orange"
                        />
                        <span className="text-xs font-mono text-brand-orange font-bold">Featured Post</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => { setActiveTab('posts'); setEditingPostId(null); }}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-brand-amber text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:opacity-95 cursor-pointer shadow-lg shadow-brand-orange/20"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingPostId ? 'Update Article' : 'Publish Article'}</span>
                </button>
              </div>
            </form>

            {/* Live Preview Modal */}
            {showPreview && (
              <div className="mt-10 p-8 rounded-3xl bg-[#0A0B0E] border border-brand-orange/30">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-wider">
                    ✦ Live Reader Preview
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    Category: {formCategory} • {formReadTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                  {formTitle || 'Article Title'}
                </h1>
                <p className="text-sm text-zinc-400 mb-6 font-mono">
                  {formExcerpt || 'Excerpt will appear here...'}
                </p>

                {formHeroImage && (
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10">
                    <Image
                      src={formHeroImage}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
                  {formContentText.split(/\n{2,}/).map((block, idx) => {
                    if (block.startsWith('### ')) {
                      return <h3 key={idx} className="text-lg font-bold text-white mt-4">{block.replace('### ', '')}</h3>;
                    }
                    return <p key={idx}>{block}</p>;
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: DATABASE & SETTINGS ================= */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl mx-auto space-y-8">
            {settingsNotice && (
              <div
                className={`p-4 rounded-xl text-xs font-mono flex items-center gap-2 ${
                  settingsNotice.type === 'success'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                    : 'bg-red-500/15 border border-red-500/30 text-red-400'
                }`}
              >
                {settingsNotice.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{settingsNotice.message}</span>
              </div>
            )}

            {/* Supabase Free Database Setup */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Free Cloud Database (Supabase)</h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    Connect a free PostgreSQL database for multi-device sync and real-time updates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs font-mono text-zinc-400 space-y-2">
                <p className="font-bold text-zinc-200">How to connect free Supabase in 2 minutes:</p>
                <ol className="list-decimal list-inside space-y-1 text-zinc-400">
                  <li>Go to <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-brand-orange underline">supabase.com</a> and create a free project.</li>
                  <li>Open the <strong>SQL Editor</strong> and run the provided script (<code className="text-zinc-200">supabase-schema.sql</code>).</li>
                  <li>Go to <strong>Project Settings → API</strong> and paste your Project URL and Anon Public Key below:</li>
                </ol>
              </div>

              <form onSubmit={handleSaveSupabaseConfig} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1 uppercase tracking-wider">
                    Supabase Project URL
                  </label>
                  <input
                    type="url"
                    value={supabaseUrl}
                    onChange={(e) => setSupabaseUrl(e.target.value)}
                    placeholder="https://xyzcompany.supabase.co"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1 uppercase tracking-wider">
                    Supabase Anon Public API Key
                  </label>
                  <input
                    type="text"
                    value={supabaseKey}
                    onChange={(e) => setSupabaseKey(e.target.value)}
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Connect & Sync to Cloud</span>
                </button>
              </form>
            </div>

            {/* Backup & Restore */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm font-bold text-white mb-1">Backup & Restore</h3>
              <p className="text-xs text-zinc-400 font-mono mb-4">
                Export all articles to a JSON file or import a saved backup anytime.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleExportJson}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-brand-orange" />
                  <span>Export Articles JSON</span>
                </button>

                <label className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 flex items-center gap-2 cursor-pointer">
                  <Upload className="w-4 h-4 text-brand-amber" />
                  <span>Restore from JSON</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImportJson}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Change Password */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-orange" />
                <span>Change Admin Password</span>
              </h3>
              <p className="text-xs text-zinc-400 font-mono mb-4">
                Update the password for <code className="text-zinc-300">admin@skyreachmedia.in</code>
              </p>

              {passNotice && (
                <div
                  className={`mb-4 p-3 rounded-lg text-xs font-mono ${
                    passNotice.type === 'success' ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'
                  }`}
                >
                  {passNotice.message}
                </div>
              )}

              <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-sm">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Current Password</label>
                  <input
                    type="password"
                    required
                    value={currentPass}
                    onChange={(e) => setCurrentPass(e.target.value)}
                    placeholder="Current password"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">New Password (min 8 chars)</label>
                  <input
                    type="password"
                    required
                    value={newPass}
                    onChange={(e) => setNewPass(e.target.value)}
                    placeholder="New password"
                    className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white cursor-pointer"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Delete Confirmation Dialog */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-[#0E0F14] border border-red-500/30 rounded-2xl p-6 shadow-2xl">
            <h4 className="text-base font-bold text-white mb-2">Delete this article?</h4>
            <p className="text-xs text-zinc-400 font-mono mb-6">
              This action will remove the article from the blog index and database. This cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3 font-mono text-xs">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 rounded-lg bg-white/5 text-zinc-300 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeletePost(deleteConfirmId)}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
