'use client';
import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="login-container" style={{ position: 'relative' }}>
      
      {/* Nút Quay lại Trang chủ (Đồng bộ với Register) */}
      <Link 
        href="/" 
        style={{
          position: 'absolute',
          top: '30px',
          left: '30px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(4px)',
          borderRadius: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
          textDecoration: 'none',
          color: '#333',
          fontSize: '14px',
          fontWeight: '600',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        className="back-home-btn"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Trang chủ
      </Link>

      {/* Vòng tròn trang trí */}
      <div className="login-decor-circle"></div>
      
      <div className="login-card" style={{ padding: '30px 40px' }}>
        
        {/* Tiêu đề */}
        <div style={{ textAlign: 'center', marginBottom: '25px' }}>
          <h1 className="login-title" style={{ margin: 0 }}>
            Welcome <span>RaveloGo</span>
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>
            Vui lòng đăng nhập để tiếp tục hành trình
          </p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          <div className="login-input-group" style={{ margin: 0 }}>
            <label className="login-label">Email</label>
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="login-input" 
              style={{ width: '100%', boxSizing: 'border-box' }}
            />
          </div>

          <div className="login-input-group" style={{ margin: 0 }}>
            <label className="login-label">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="login-input"
              style={{ width: '100%', boxSizing: 'border-box' }}
            />
          </div>

          {/* Dòng Ghi nhớ đăng nhập & Quên mật khẩu */}
          <div className="login-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '-5px' }}>
            <label className="login-checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: '#555' }}>
              <input type="checkbox" style={{width: '16px', height: '16px', cursor: 'pointer', margin: 0}} />
              Remember me
            </label>
            <Link href="#" className="login-forgot" style={{ fontSize: '14px', color: '#007BFF', textDecoration: 'none', fontWeight: '500' }}>
              Forget password?
            </Link>
          </div>

          {/* Sửa lại text cho hợp lý: Đăng nhập thay vì Tạo tài khoản */}
          <button className="login-btn-primary" type="button" style={{ marginTop: '10px' }}>
            Sign In
          </button>

          <div className="login-divider" style={{ margin: '5px 0' }}>
            <div className="login-line" style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
            <span style={{ margin: '0 15px', fontSize: '13px', color: '#888' }}>Hoặc</span>
            <div className="login-line" style={{ flex: 1, height: '1px', background: '#e0e0e0' }}></div>
          </div>

          <button className="login-btn-google" type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" style={{marginRight: '10px'}}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </form>

        <div className="login-footer" style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
          Bạn chưa có tài khoản? 
          <Link href="/register" className="login-link" style={{ marginLeft: '5px', fontWeight: 'bold', color: '#007BFF', textDecoration: 'none' }}>
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}