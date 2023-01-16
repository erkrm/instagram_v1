import { modalState } from '@/atom/modalAtom';
import { useRecoilState } from 'recoil';

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>qqqqqq</h1>
      {open && <h1>modal is open</h1>}
    </div>
  );
}
