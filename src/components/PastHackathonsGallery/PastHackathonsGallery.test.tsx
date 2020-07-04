import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

// HackMerced I
import CHECKIN from '../../assets/images/checkin.jpg';
import HMFOOD from '../../assets/images/hmfood.jpg';
import MACHINE from '../../assets/images/machine.jpg';
import TEACHING from '../../assets/images/teaching.jpg';
import OLDTEAM from '../../assets/images/team-2016.jpg';
import TUTOR from '../../assets/images/tutor.jpg';

// HackMerced II
import SPEAKERII from '../../assets/images/speaker-ii.jpg';
import HACKERSII from '../../assets/images/hackers-ii.jpg';
import COLLABORATION from '../../assets/images/collaboration.jpg';
import CHECKINGINII from '../../assets/images/checking-in-ii.jpg';
import MLHII from '../../assets/images/mlh-ii.jpg';
import SPONSORSII from '../../assets/images/sponsors-ii.jpg';

// HackMerced III
import MLHCUPSTACK from '../../assets/images/mlh-cupstack.jpg';
import WINNERSIII from '../../assets/images/winners-iii.jpg';
import AWARDSIII from '../../assets/images/awards-iii.jpg';
import PRIZES from '../../assets/images/prizes-iii.jpg';
import JUDGESIII from '../../assets/images/judges-iii.jpg';
import REDBULL from '../../assets/images/redbull.jpg';

// HackMerced IV
import HACKING from '../../assets/images/hackers2.jpg';
import PRESENTER from '../../assets/images/presenter.jpg';
import PRESENTATIONS from '../../assets/images/presentations.jpg';
import HACKIV from '../../assets/images/hackiv.jpg';
import JUDGES from '../../assets/images/judges.jpg';
import AWARDS from '../../assets/images/awards2.jpg';

// HackMerced V
import HACKERS from '../../assets/images/hackers.jpg';
import HMFOODV from '../../assets/images/hmfood-v.jpg';
import CITRIS from '../../assets/images/citris.jpg';
import SPONSORSV from '../../assets/images/sponsors-v.jpg';
import HEALTHWINNER from '../../assets/images/health2.jpg';
import SHUBAWARD from '../../assets/images/shub-award.jpg';

import PastHackathonsGallery from './PastHackathonsGallery';

let container: HTMLDivElement;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
});

test('check if images load for HackMerced I', () => {
    act(() => {
        render(<PastHackathonsGallery iteration={null} images={[CHECKIN, HMFOOD, MACHINE, TEACHING, OLDTEAM, TUTOR]} />, container);
    });

    expect(container.getElementsByTagName('img')[0]).toHaveAttribute('src', CHECKIN);
    expect(container.getElementsByTagName('img')[1]).toHaveAttribute('src', HMFOOD);
    expect(container.getElementsByTagName('img')[2]).toHaveAttribute('src', MACHINE);
    expect(container.getElementsByTagName('img')[3]).toHaveAttribute('src', TEACHING);
    expect(container.getElementsByTagName('img')[4]).toHaveAttribute('src', OLDTEAM);
    expect(container.getElementsByTagName('img')[5]).toHaveAttribute('src', TUTOR);
});

test('check if images load for HackMerced II', () => {
  act(() => {
      render(<PastHackathonsGallery iteration={"II"} images={[SPEAKERII, HACKERSII, COLLABORATION, CHECKINGINII, MLHII, SPONSORSII]} />, container);
  });

  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('src', SPEAKERII);
  expect(container.getElementsByTagName('img')[1]).toHaveAttribute('src', HACKERSII);
  expect(container.getElementsByTagName('img')[2]).toHaveAttribute('src', COLLABORATION);
  expect(container.getElementsByTagName('img')[3]).toHaveAttribute('src', CHECKINGINII);
  expect(container.getElementsByTagName('img')[4]).toHaveAttribute('src', MLHII);
  expect(container.getElementsByTagName('img')[5]).toHaveAttribute('src', SPONSORSII);
});

test('check if images load for HackMerced III', () => {
  act(() => {
      render(<PastHackathonsGallery iteration={"III"} images={[MLHCUPSTACK, WINNERSIII, AWARDSIII, PRIZES, JUDGESIII, REDBULL]} />, container);
  });

  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('src', MLHCUPSTACK);
  expect(container.getElementsByTagName('img')[1]).toHaveAttribute('src', WINNERSIII);
  expect(container.getElementsByTagName('img')[2]).toHaveAttribute('src', AWARDSIII);
  expect(container.getElementsByTagName('img')[3]).toHaveAttribute('src', PRIZES);
  expect(container.getElementsByTagName('img')[4]).toHaveAttribute('src', JUDGESIII);
  expect(container.getElementsByTagName('img')[5]).toHaveAttribute('src', REDBULL);
});

test('check if images load for HackMerced IV', () => {
  act(() => {
      render(<PastHackathonsGallery iteration={"IV"} images={[HACKING, PRESENTER, PRESENTATIONS, HACKIV, JUDGES, AWARDS]} />, container);
  });

  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('src', HACKING);
  expect(container.getElementsByTagName('img')[1]).toHaveAttribute('src', PRESENTER);
  expect(container.getElementsByTagName('img')[2]).toHaveAttribute('src', PRESENTATIONS);
  expect(container.getElementsByTagName('img')[3]).toHaveAttribute('src', HACKIV);
  expect(container.getElementsByTagName('img')[4]).toHaveAttribute('src', JUDGES);
  expect(container.getElementsByTagName('img')[5]).toHaveAttribute('src', AWARDS);
});

test('check if images load for HackMerced V', () => {
  act(() => {
      render(<PastHackathonsGallery iteration={"V"} images={[HACKERS, HMFOODV, CITRIS, SPONSORSV, HEALTHWINNER, SHUBAWARD]} />, container);
  });

  expect(container.getElementsByTagName('img')[0]).toHaveAttribute('src', HACKERS);
  expect(container.getElementsByTagName('img')[1]).toHaveAttribute('src', HMFOODV);
  expect(container.getElementsByTagName('img')[2]).toHaveAttribute('src', CITRIS);
  expect(container.getElementsByTagName('img')[3]).toHaveAttribute('src', SPONSORSV);
  expect(container.getElementsByTagName('img')[4]).toHaveAttribute('src', HEALTHWINNER);
  expect(container.getElementsByTagName('img')[5]).toHaveAttribute('src', SHUBAWARD);
});
