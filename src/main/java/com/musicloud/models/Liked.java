package com.musicloud.models;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "liked")
public class Liked extends BasePlaylist {
    @OneToOne(optional = false, mappedBy = "liked")
    private User user;

    public Liked() {
        super();
    }

    public Liked(String name) {
        super(name);
    }

    @Override
    public User getUser() {
        return this.user;
    }

    @Override
    public void setUser(User user) {
        this.user = user;
    }
}
