// src/app/page.tsx（簡易AppShell）
'use client';
import { Box, Drawer, List, ListItemButton, Toolbar, Typography } from '@mui/material';

const NAV = ['Typography','Forms','Tables','Settings'];
const SIDEBAR_W = 220;

export default function Page() {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'grey.100', minHeight: '100dvh' }}>
      <Drawer variant="permanent"
        PaperProps={{ sx:{ width:SIDEBAR_W, borderRight:0, bgcolor:'#0f6a6a', color:'#fff', borderRadius:'0 28px 28px 0' }}}>
        <Toolbar />
        <List>{NAV.map(n => <ListItemButton key={n} sx={{ borderRadius:2, mx:1, my:.5 }}>{n}</ListItemButton>)}</List>
      </Drawer>

      <Box component="main" sx={{ flex:1, px:3, py:2, ml:`${SIDEBAR_W}px` }}>
        {/* ここに各ページの中身を差し込む */}
        <Typography variant="h5" sx={{ mb:2 }}>Typography</Typography>
      </Box>

      {/* 右側の余白（装飾用） */}
      <Box sx={{ width: 260, bgcolor: 'grey.200', borderRadius:'28px 0 0 28px', mr:2, display:{ xs:'none', lg:'block'} }}/>
    </Box>
  );
}