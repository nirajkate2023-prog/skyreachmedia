// SkyReach Media Admin Authentication Module

export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

const DEFAULT_ADMIN_EMAIL = 'admin@skyreachmedia.in';
const DEFAULT_ADMIN_PASS = 'SkyReach#Admin2026!';
const AUTH_TOKEN_KEY = 'skyreach_admin_token';
const AUTH_USER_KEY = 'skyreach_admin_user';
const CUSTOM_PASS_KEY = 'skyreach_admin_custom_pass';

export const authService = {
  // Check if admin is currently authenticated
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    const user = localStorage.getItem(AUTH_USER_KEY);
    return Boolean(token && user);
  },

  // Get current logged-in user
  getCurrentUser(): AdminUser | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem(AUTH_USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  // Login with credentials
  login(emailInput: string, passwordInput: string): { success: boolean; error?: string; user?: AdminUser } {
    if (typeof window === 'undefined') {
      return { success: false, error: 'Cannot authenticate on server' };
    }

    const email = emailInput.trim().toLowerCase();
    const password = passwordInput.trim();

    // Check custom password if user changed it in dashboard, otherwise check default
    const expectedPass = localStorage.getItem(CUSTOM_PASS_KEY) || DEFAULT_ADMIN_PASS;

    if (email === DEFAULT_ADMIN_EMAIL && password === expectedPass) {
      const user: AdminUser = {
        id: 'skyreach-admin-1',
        email: DEFAULT_ADMIN_EMAIL,
        name: 'SkyReach Administrator',
        role: 'Super Admin',
      };

      const token = `srm_tok_${Date.now()}_${Math.random().toString(36).substring(2, 12)}`;
      localStorage.setItem(AUTH_TOKEN_KEY, token);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));

      return { success: true, user };
    }

    return {
      success: false,
      error: 'Invalid credentials. Please verify your Admin Email and Password.',
    };
  },

  // Logout
  logout() {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  },

  // Update Admin Password
  updatePassword(currentPassword: string, newPassword: string): { success: boolean; error?: string } {
    if (typeof window === 'undefined') return { success: false, error: 'Not in browser' };

    const expectedPass = localStorage.getItem(CUSTOM_PASS_KEY) || DEFAULT_ADMIN_PASS;
    if (currentPassword !== expectedPass) {
      return { success: false, error: 'Current password is incorrect' };
    }

    if (newPassword.length < 8) {
      return { success: false, error: 'New password must be at least 8 characters' };
    }

    localStorage.setItem(CUSTOM_PASS_KEY, newPassword);
    return { success: true };
  },
};
