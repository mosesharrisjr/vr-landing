export async function getVideo(slug) {
  try {
    const url = '/api/video/' + slug;
    const options = {
      method: 'GET',
    };
    const response = await fetch(url, options);
    return await response.json();
  } catch(e) {
    throw e;
  }
}

export async function getVideos() {
  try {
    const url = '/api/videos'
    const options = {
      method: 'GET',
    };
    const response = await fetch(url, options);
    return await response.json();
  } catch(e) {
    throw e;
  }
}

export async function getLogos() {
  try {
    const url = '/api/logos'
    const options = {
      method: 'GET',
    };
    const response = await fetch(url, options);
    return await response.json();
  } catch(e) {
    throw e;
  }
}

export async function getWatch() {
  try {
    const url = '/api/watch'
    const options = {
      method: 'GET',
    };
    const response = await fetch(url, options);
    return await response.json();
  } catch(e) {
    throw e;
  }
}
