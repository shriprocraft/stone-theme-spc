'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  /** No photo yet: the gallery shows a labelled initials card until `image` is supplied. */
  placeholder?: boolean;
  social?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    behance?: string;
  };
}

/* Shri Pro Craft team — photos for Shrihari, Thayalan, Thrisha, Sri Ruthra (display name; asset
   file remains /team/Sriruthra.png) and Varshini come from the
   supplied "meet the experts photo.zip" (mapped by exact filename, stored in /public/team). Photos
   for Shrihari, Thayalan, Thrisha, Sri Ruthra, Varshini, Kaviya, Parimala and Niranjana come from the
   supplied "meet the experts photos.zip" v2 (mapped by exact filename, stored in /public/team).
   Updated photos for Thayalan, Kaviya, Mirudula and Varshaa come from the supplied
   "experts photo.zip" v3 (mapped by exact filename, stored in /public/team) — Mirudula's previous
   AI portrait and Varshaa's previous stock portrait are now replaced with real photos. The members
   not included in any ZIP (Adithya) keeps the previous placeholder stock portrait until the photo
   is supplied. Sanjana's real photo is /team/sanjana.png. Hari Prasath, Divya, Saran and Harini use AI-generated studio
   portraits (/public/team). All portraits render grayscale via the card treatment and colorize
   on hover. */
const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Shrihari',
    role: 'CEO',
    image: '/team/Shrihari.png',
  },
  {
    id: '2',
    name: 'Adithya',
    role: 'COO',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=440&fit=crop&crop=faces&auto=format&q=80',
  },
  {
    id: '3',
    name: 'Varshaa',
    role: 'AI Agent Developer',
    image: '/team/varshaa.png',
  },
  {
    id: '4',
    name: 'Parimala',
    role: 'AI Agent Developer',
    image: '/team/parimala.png',
  },
  {
    id: '5',
    name: 'Niranjana',
    role: 'AI Workflow Specialist',
    image: '/team/niranjana.png',
  },
  {
    id: '6',
    name: 'Sanjana',
    role: 'AI Workflow Specialist',
    image: '/team/sanjana.png',
  },
  {
    id: '7',
    name: 'Thayalan',
    role: 'Full Stack Developer',
    image: '/team/Thayalan.png',
  },
  {
    id: '8',
    name: 'Thrisha',
    role: 'Full Stack Developer',
    image: '/team/Thrisha.png',
  },
  {
    id: '9',
    name: 'Sri Ruthra',
    role: 'Full Stack Developer',
    image: '/team/Sriruthra.png',
  },
  {
    id: '10',
    name: 'Varshini',
    role: 'International Client Relations Executive',
    image: '/team/varshini.png',
  },
  {
    id: '11',
    name: 'Hari Prasath',
    role: 'Visual Content Producer',
    image: '/team/hari-prasath.png',
  },
  {
    id: '12',
    name: 'Divya',
    role: 'Business Development Executive',
    image: '/team/divya.png',
  },
  {
    id: '13',
    name: 'Kaviya',
    role: 'Outreach Executive',
    image: '/team/kaviya.png',
  },
  {
    id: '14',
    name: 'Saran',
    role: 'Video Editor',
    image: '/team/saran.png',
  },
  {
    id: '15',
    name: 'Harini',
    role: 'Administration Executive',
    image: '/team/harini.png',
  },
  {
    id: '16',
    name: 'Mirudula',
    role: 'Front End Developer',
    image: '/team/mirudula.png',
  },
  // Prasanth Senthil, Anbuchezhiyan and Pooja have photos — add an `image`
  // path (e.g. '/team/pooja.png') and remove `placeholder` to swap in the real portrait.
  {
    id: '17',
    name: 'Prasanth Senthil',
    role: 'Videographer and Video Editor',
    image: '/team/prasanth-senthil.png',
  },
  {
    id: '18',
    name: 'Anbuchezhiyan',
    role: 'Full Stack Developer',
    image: '/team/anbuchezhiyan.png',
  },
  {
    id: '19',
    name: 'Pooja',
    role: 'Fashion and Commercial Model',
    image: '/team/pooja.png',
  },
];

interface TeamShowcaseProps {
  members?: TeamMember[];
}

export default function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Photo grid renders only members that have a portrait; the name list renders every member.
  const photoMembers = members.filter(
    (m) => (typeof m.image === 'string' && m.image.length > 0) || m.placeholder === true,
  );
  const hoveredHasPhoto = hoveredId !== null && photoMembers.some((m) => m.id === hoveredId);

  const col1 = photoMembers.filter((_, i) => i % 3 === 0);
  const col2 = photoMembers.filter((_, i) => i % 3 === 1);
  const col3 = photoMembers.filter((_, i) => i % 3 === 2);

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto py-8 px-4 md:px-6 font-sans">
      {/* ── Left: photo grid ── */}
      <div className="flex max-w-full gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
              hoveredId={hoveredId}
              dimPhotos={hoveredHasPhoto}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
              hoveredId={hoveredId}
              dimPhotos={hoveredHasPhoto}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
              hoveredId={hoveredId}
              dimPhotos={hoveredHasPhoto}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list*/}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Photo card
───────────────────────────────────────── */

/** "Prasanth Senthil" → "PS", "Pooja" → "P". */
function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function PhotoCard({
  member,
  className,
  hoveredId,
  dimPhotos,
  onHover,
}: {
  member: TeamMember;
  className: string;
  hoveredId: string | null;
  dimPhotos: boolean;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = dimPhotos && hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-[filter] duration-500"
          style={{
            filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
          }}
        />
      ) : (
        <div
          role="img"
          aria-label={`${member.name} — photo coming soon`}
          className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-[linear-gradient(160deg,#c9c6c1_0%,#a9a6a1_100%)]"
        >
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground/55">
            {initialsOf(member.name)}
          </span>
          <span className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.14em] text-foreground/45">
            Photo soon
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter ?? member.social?.linkedin ?? member.social?.instagram ?? member.social?.behance;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'w-4 h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-foreground w-5' : 'bg-foreground/25',
          )}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded text-muted-foreground hover:text-foreground hover:bg-foreground/10 transition-all duration-150 hover:scale-110"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {member.role}
      </p>
    </div>
  );
}
